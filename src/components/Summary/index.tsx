import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';
import { SummaryDTO } from '../../dtos/SummaryDTO';
import { formatAmount } from '../../utils/formatAmount';

import { Container } from './styles';

export function Summary({ deposits, withdraws, total }: SummaryDTO) {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>{formatAmount(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={OutcomeImg} alt="Saídas" />
        </header>
        <strong>{formatAmount(withdraws)}</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>{formatAmount(total)}</strong>
      </div>
    </Container>
  );
}
