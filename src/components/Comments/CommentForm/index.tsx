import React, { FC, useState } from "react";
import { FormContainer } from "./styled";

const CommentForm: FC<{ handleNewComment: (comment: string) => void }> = (
  props
): JSX.Element => {
  const { handleNewComment } = props;
  const [newComment, setNewComment] = useState("");

  // const handleClick = useCallback((comment: IComment) => {}, []);

  return (
    <FormContainer>
      {/* <form onSubmit={handleNewComment}> */}
      <label>
        <p>Username</p>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </label>
      <div>
        <button onClick={() => handleNewComment(newComment)}>Submit</button>
      </div>
      {/* </form> */}
    </FormContainer>
  );
};

export default CommentForm;
