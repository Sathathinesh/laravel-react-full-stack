import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Users from "./views/Users";
import App from "./App";
import NotFound from "./views/NotFound";

const router = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/users" component={Users} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default router;
