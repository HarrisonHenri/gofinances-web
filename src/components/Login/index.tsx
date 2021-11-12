import { useAuth } from '../../hooks/auth';
import { SocialLoginButton } from '../SocialLoginButton';
import { Container } from './styles';

export function Login() {
  const { signIn } = useAuth();

  return (
    <Container>
      <SocialLoginButton onButtonClick={signIn} />
    </Container>
  );
}
