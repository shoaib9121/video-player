import styled from "styled-components";

const responsiveBreakpoint = "1000px";

export const Grid = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${responsiveBreakpoint}) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const GridItemVideo = styled.div`
  width: 80%;
  display: flex;
  gap: 50px;
  flex-direction: column;

  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }

  @media (min-width: 1280px) {
    width: 70%;
  }
`;

export const VideoContainer = styled.div`
  background: firebrick;
  height: 450px;
`;

export const GridItemAside = styled.div`
  width: 20%;

  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }
`;
