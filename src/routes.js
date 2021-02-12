import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

export default function Routes(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
			<Switch>
				<Route path="/home">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}