import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser } from "../../../../ducks/userReducer";
import { IframeContainer, ContainerDiv } from "./SandboxSC";
import "./sandbox.css";

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drillInfo: []
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  linkToggle() {
    return this.props.state.user.loggedIn
      ? (window.location.href = `${
          process.env.REACT_APP_CLIENT
        }/dashboard/recent`)
      : (window.location.href = `${process.env.REACT_APP_CLIENT}/`);
  }

  render() {
    const { id } = this.props.match.params;
    const { loggedIn, drills } = this.props.state.user;
    const defaultSandbox = "xrmmr06z6p";
    const consoled = "console";
    const browser = "browser";

    const drillUrl = drills
      .filter((value, index) => {
        return value.drill_id === id;
      })
      .map((value, index) => {
        return value.drill_url;
      });

    const displayDescription = drills
      .filter((value, index) => {
        return value.drill_id === id;
      })
      .map((value, index) => {
        return <p>{value.drill_description}</p>;
      });
    let linkToggle = loggedIn ? (
      <button className="logbtn" onClick={() => this.linkToggle()}>
        Dashboard
      </button>
    ) : (
      <button className="loggedOutBtn" onClick={() => this.linkToggle()}>
        Back
      </button>
    );

    return (
      <ContainerDiv>
        <div className="wrap-collapsible">
          {linkToggle}
          <input id="collapsible" className="toggle" type="checkbox" />
          <label for="collapsible" class="lbl-toggle">
            More Info
          </label>

          <div className="collapsible-content">
            <div className="content-inner">
              {id ? (
                displayDescription
              ) : (
                <p>
                  This is the code sandbox where you can flex those new React
                  skills! Change anything in the editor and see it rendered in
                  real time on the right hand side.
                </p>
              )}
            </div>
          </div>
        </div>

        <IframeContainer>
          <iframe
            src={`https://codesandbox.io/embed/${
              id ? drillUrl : defaultSandbox
            }?view=split&previewwindow=${id ? consoled : browser}`}
            width="100%"
            height="890px"
            overflow="hidden"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
            title="Test Sandbox"
          />
        </IframeContainer>
      </ContainerDiv>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getUser }
)(Sandbox);
