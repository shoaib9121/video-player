import styled from "styled-components";

export const CommentContainer = styled.div`

`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentItem = styled.div`
  margin-bottom: 20px;

  > div {
    border: none;
    box-shadow: 0px 1px 8px rgb(0 0 0 / 15%);
  }

  .comment {
    word-break: break-word;
  }
`;
