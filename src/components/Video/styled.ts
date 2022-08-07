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
  width: 75%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }
`;

export const VideoContainer = styled.div``;

export const VideoOuter = styled.div`
  height: 450px;

  @media (max-width: 400px) {
    height: auto;
  }
`;

export const GridItemAside = styled.div`
  width: 25%;

  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }
`;
