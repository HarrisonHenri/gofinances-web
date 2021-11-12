import { useEffect, useState } from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';
import { TransactionDTO } from '../../dtos/TransactionDTO';
import { api } from '../../services/api';
import { formatAmount } from '../../utils/formatAmount';
import { formatDate } from '../../utils/formatDate';
import { SummaryDTO } from '../../dtos/SummaryDTO';

export function Dashboard() {
  const [data, setData] = useState<TransactionDTO[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryDTO>({} as SummaryDTO);

  useEffect(() => {
    async function loadData() {
      const uri = '/api/v1/statements/balance';
      const response = await api.get<{ statement: TransactionDTO[] }>(uri);

      const parsedResponse = response.data.statement.map(statement => {
        const sign = statement.type === 'withdraw' ? '-' : '';

        return {
          ...statement,
          amount: `${sign}${formatAmount(Number(statement.amount))}`,
          updated_at: formatDate(new Date(statement.updated_at)),
        };
      });

      const summary = response.data.statement.reduce(
        (acc, curr) => {
          if (curr.type === 'deposit') {
            return {
              ...acc,
              total: acc.total + Number(curr.amount),
              deposits: acc.deposits + Number(curr.amount),
            };
          }
          return {
            ...acc,
            total: acc.total - Number(curr.amount),
            withdraws: acc.withdraws - Number(curr.amount),
          };
        },
        {
          deposits: 0,
          withdraws: 0,
          total: 0,
        },
      );

      setSummaryData(summary);

      setData(parsedResponse);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Summary
        deposits={summaryData.deposits}
        total={summaryData.total}
        withdraws={summaryData.withdraws}
      />
      <TransactionsTable transactions={data} />
    </Container>
  );
}
