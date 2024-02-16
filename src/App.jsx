import "./App.css";
import Store from "./redux/Store";
import Router from "./rout/Router";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
}

export default App;
