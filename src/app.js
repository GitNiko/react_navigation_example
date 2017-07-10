import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>start navigation</div>
      </Provider>
    );
  }
}
