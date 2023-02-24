import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeRoute } from "./routes/HomeRoute";

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/"} component={HomeRoute} />
      </Switch>
    </>
  );
};
