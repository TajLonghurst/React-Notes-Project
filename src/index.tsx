import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/index";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>
);
