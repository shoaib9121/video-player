import styled from "styled-components";

export const List = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
`;

export const ListItem = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 15px;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }

  .thumb-wrapper {
    position: relative;
    max-width: 90px;
    min-width: 70px;
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
    background: linear-gradient(180deg,rgba(0,0,0,.72),transparent);
    transition: .3s;
  }

  .title {
    margin-bottom: 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  .chip {
    height: 18px;
    color: white;
    font-size: 12px;
    min-width: 50px;
    cursor: pointer;
  }
`;
