import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Card, MainContainer } from "../../../resources/styles/masterStyles";

class LessonsDisplayed extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MainContainer>
        <Card
          backgroundImage="url(https://www.gizmo-experience.com/wp-content/uploads/2018/10/gizmo-homepage-mobile-fallback-1.jpg)"
          alignItems="flex-end"
        >
          <div
            style={{
              width: "100%",
              borderRadius: "3%",
              height: "50%",
              backgroundColor: "rgba(37,37,37,0.7)"
            }}
          >
            Lesson 1
          </div>
        </Card>
        <Card> Lesson 2 </Card>
        <Card> Lesson 3 </Card>
        <Card> Lesson 4 </Card>
        <Card> Lesson 5 </Card>
        <Card> Lesson 6 </Card>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LessonsDisplayed);
