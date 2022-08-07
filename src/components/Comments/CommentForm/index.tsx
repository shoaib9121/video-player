import { FC, useState } from "react";
import { FormContainer } from "./styled";

const CommentForm: FC<{ handleNewComment: (comment: string) => void }> = (
  props
): JSX.Element => {
  const { handleNewComment } = props;
  const [newComment, setNewComment] = useState("");

  return (
    <FormContainer>
      <label>
        <p>Username</p>
        <input
          type="text"
          value={newComment}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleNewComment(e.target.value);
              setNewComment("");
            }
          }}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </label>
      <div>
        <button
          disabled={!newComment}
          onClick={() => {
            handleNewComment(newComment);
            setNewComment("");
          }}
        >
          Submit
        </button>
      </div>
    </FormContainer>
  );
};

export default CommentForm;
