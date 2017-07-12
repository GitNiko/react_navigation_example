import React from "react";
import { Provider } from "react-redux";
import Main from "./main";
import configureStore from "./store";

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
