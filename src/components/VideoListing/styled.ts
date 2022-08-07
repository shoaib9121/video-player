import styled from "styled-components";

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  width: 100%;
  margin-top: 2%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0px 20px rgb(0 0 0 / 40%);
  -webkit-box-shadow: 0 0px 20px rgb(0 0 0 / 40%);
  -moz-box-shadow: 0 0px 20px rgb(0 0 0 / 40%);

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
  img {
    position: relative;
    z-index: 9;
    height: 100%;
  }
  .chip {
    color: white;
    min-width: 70px;
    position: absolute;
    top: 15px;
    z-index: 10;
    right: 10px;
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    word-break: break-word;
    padding: 10px;
    width: 100%;
    background: rgb(255 255 255 / 75%);
    z-index: 10;

    span {
      display: -webkit-box;
      max-width: 200px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .play-icon {
    color: aquamarine;
  }

  .overlay {
    z-index: 11;
    opacity: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.72), transparent);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
  }

  @media (min-width: 48rem) {
    width: 49%;
    &:nth-child(odd) {
      margin-right: 2%;
    }
  }

  @media (min-width: 62rem) {
    width: 23.5%;
    &:not(:nth-child(4n)) {
      margin-right: 2%;
    }
  }

  &:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
`;
