import React from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import { WebNavigator } from "../routes";

class Main extends React.Component {
  render() {
    return (
      <WebNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.navi
        })}
      />
    );
  }
}

export default connect(state => ({ navi: state.navi }))(Main);
