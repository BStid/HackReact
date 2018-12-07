import styled from "styled-components";

export const LeftContainer = styled.div`
  height: 100vh;
  width: 65vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightContainer = styled.div`
  height: 100vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
`;
export const UpperRight = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 216, 255);
  font-weight: 100;
  letter-spacing: 1px;
  z-index: 1;
  p {
    margin: 4% 0;
    text-align: center;
    width: 80%;
  }
`;
export const BottomRight = styled(UpperRight)`
  background-color: rgb(37, 37, 37);
  display: flex;
  flex-direction: column;
  color: #e5e5e5;
  font-size: 1.05rem;

  p {
    font-weight: 200;
    margin: 4% 0;
    width: 85%;
    text-align: center;
    letter-spacing: 3px;
  }
`;
export const Title = styled.h1`
  font-size: ${props => props.fontSize || "35px"};
  color: ${props => props.color || "white"};
  letter-spacing: 1px;
  text-transform: ${props => props.textTransform || null};
  font-family: ${props => props.fontFamily || null};
  font-weight: ${props => props.fontWeight || "bold"};
  margin: ${props => props.margin || "0"};
`;

export const WrenchIcon = styled.img`
  position: absolute;
  top: 28%;
  right: 4%;
  height: auto;
  width: 9%;
  overflow: hidden;
`;
export const ArrowIcon = styled.img`
  position: absolute;
  top: ${props => props.top || "75%"};
  left: ${props => props.left || "35%"};
  height: auto;
  width: ${props => props.width || "2%"};
  overflow: hidden;
  cursor: pointer;
`;

export const MenuContainers = styled.div`
  position: absolute;
  left: 0;
  height: 50%;
  width: 320vw;
  color: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  transition: 0.2s;
`;

export const MenuContents = styled.div`
  overflow: hidden;
  height: 100%;
  width: 57vw;
  transform: ${props =>
    props.translateX <= 0
      ? "translateX(0)"
      : props.translateX === 1
      ? "translateX(-112%)"
      : props.translateX === 2
      ? "translateX(-222%)"
      : props.translateX === 3
      ? "translateX(-333%)"
      : props.translateX >= 4
      ? "translateX(-444%)"
      : "translateX(0)"};
  margin: 0 1%;
  transition: 0.6s;
  z-index: 0;
`;

export const ScribbleUnderline = styled.img`
  position: absolute;
  top: 28%;
  height: auto;
  width: 20%;
`;
