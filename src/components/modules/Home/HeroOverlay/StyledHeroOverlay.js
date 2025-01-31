import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  height: 45vw;
  @media (orientation: portrait) {
    height: 80vw;
  }
`;

export const Tagline = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  width: 50%;
  font-weight: bold;
  font-size: 5vw;
  color: white;
  font-family: "Holtwood One SC", serif;
  line-height: 1.1em;
  text-shadow: 4px 4px 1px black;

  @media (orientation: portrait) {
    width: 80%;
  }
`;
