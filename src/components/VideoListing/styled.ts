import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  width: 100%;
  background: firebrick;
  margin-top: 2%;

  @media (min-width: 48rem) {
    width: 49%;
    &:nth-child(odd) {
      background: grey;
      margin-right: 2%;
    }
  }

  @media (min-width: 62rem) {
    width: 23.5%;
    &:not(:nth-child(4n)) {
      background: grey;
      margin-right: 2%;
    }
  }

  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;
