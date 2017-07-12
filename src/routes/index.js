import React from "react";
import Home from "../main/home";
import Profile from "../main/profile";

export const AppRouteConfigs = {
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  }
};

export const WebRouter = {
  getStateForAction: (state, action) => {
    if (action.type === "WebRouter/push") {
      const { routeName } = action.payload;
      const routes = [...state.routes];
      routes.push({
        routeName: routeName,
        params: {}
      });
      return {
        index: state.index + 1,
        routes
      };
    } else if (action.type === "WebRouter/back") {
      const routes = [...state.routes];
      routes.pop();
      return {
        index: state.index - 1,
        routes
      };
    }
    return state;
  },
  getActionForPathAndParams: (path, params) => null,
  getPathAndParamsForState: state => null,
  getComponentForState: state => {
    console.log("state", state);
    return AppRouteConfigs[state.routes[state.index].routeName].screen;
  },
  getComponentForRouteName: routeName => null
};

export class WebNavigator extends React.Component {
  render() {
    const Screen = WebRouter.getComponentForState(this.props.navigation.state);
    console.log(Screen);
    if (Screen) {
      return <Screen {...this.props.navigation} />;
    } else {
      return <div>none screen</div>;
    }
  }
}
