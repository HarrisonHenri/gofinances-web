import { Container, Content } from './styles';
import LogoImg from '../../assets/logo.svg';

interface Props {
  onButtonClick?: VoidFunction;
}

export function Header({ onButtonClick }: Props) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="go finances" />
        {onButtonClick && (
          <button type="button" onClick={onButtonClick}>
            Nova transação
          </button>
        )}
      </Content>
    </Container>
  );
}
