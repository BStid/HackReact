import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, MainContainer } from "../../resources/styles/masterStyles";
import { getUserImage } from "../../../ducks/userReducer";
import {
  RecentProfileContainer,
  ProfileImage,
  HeatMapContainer,
  NextLessonContainer
} from "./RecentSC";
import Starfall from "./canvas/Starfall";
import Heatmap from "./vx/Heatmap";

class Recent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getUserImage();
  }

  render() {
    const { userImage } = this.props.user;
    console.log(userImage);
    return (
      <MainContainer height="100vh">
        <RecentProfileContainer>
          {!this.props.user.userImage ? null : this.props.user.userImage[0]
              .image_url === null ? (
            <ProfileImage
              src={
                "https://images.unsplash.com/photo-1460893330858-0c301e67cacf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
              }
              alt="profile"
            />
          ) : (
            <ProfileImage src={userImage[0].image_url} alt="profile" />
          )}
          <HeatMapContainer>
            Login Activity
            <Heatmap height="250" width="450" />
          </HeatMapContainer>
        </RecentProfileContainer>
        <NextLessonContainer />
        <NextLessonContainer left="55%" />

        <Starfall />
      </MainContainer>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUserImage }
)(Recent);
