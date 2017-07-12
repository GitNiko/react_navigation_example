import React from "react";
import { naviGo } from "../../actions/";

export default class Home extends React.Component {
  goProfile = () => {
    console.log(this.props);
    this.props.dispatch(naviGo("Profile"));
  };
  render() {
    return (
      <div>
        Home
        <button onClick={this.goProfile}>profile</button>
      </div>
    );
  }
}
