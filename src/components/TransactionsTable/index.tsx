import { TransactionDTO } from '../../dtos/TransactionDTO';
import { Container } from './styles';

interface Props {
  transactions: TransactionDTO[];
}

export function TransactionsTable({ transactions }: Props) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(item => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td className={item.type}>{item.amount}</td>
              <td>{item.category}</td>
              <td>{item.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
