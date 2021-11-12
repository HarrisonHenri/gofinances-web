import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { DashboardScreen } from '../screens/Dashboard';
import { LoginScreen } from '../screens/Login';

export function AppRoutes() {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Switch>
        {isAuth ? (
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        ) : (
          <Route exact path="/dashboard">
            <Redirect to="/" />
          </Route>
        )}

        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/dashboard" component={DashboardScreen} />
      </Switch>
    </BrowserRouter>
  );
}
