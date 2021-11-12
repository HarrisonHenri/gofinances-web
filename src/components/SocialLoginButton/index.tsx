import { Container } from './styles';
import GoogleImg from '../../assets/google.svg';

interface Props {
  onButtonClick: VoidFunction;
}

export function SocialLoginButton({ onButtonClick }: Props) {
  return (
    <Container onClick={onButtonClick}>
      <img src={GoogleImg} alt="go finances" />
      <p>Entrar com Google</p>
    </Container>
  );
}
