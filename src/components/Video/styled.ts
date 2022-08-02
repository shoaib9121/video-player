import styled from "styled-components";

const responsiveBreakpoint = '1000px';

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
  background: firebrick;
  height: 450px;
  
  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }
`;

export const GridItemAside = styled.div`
  width: 20%;

  @media (max-width: ${responsiveBreakpoint}) {
    width: 100%;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const ListItem = styled.div`
  background: grey;
  height: 100px;
`;
