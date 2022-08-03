import { memo, useEffect, useState } from "react";
import { CommentContainer, CommentList, CommentItem } from "./styled";
import { IComment } from "../../types";
import CommentForm from "./CommentForm";

const Comments: React.FC<{ comments: IComment[] }> = (props): JSX.Element => {
  const [comments, setComments] = useState<IComment[]>(props.comments || []);

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  const handleNewComment = (comment: string) => {
    const tempComments = [...comments];
    tempComments.push({
      id: 123,
      author: "shoaib",
      createdAt: "timestamp",
      comment,
    });
    setComments(tempComments);
  };

  if (!comments.length) {
    return <>No Comments</>;
  }

  return (
    <CommentContainer>
      <h3>Comments</h3>
      <CommentForm handleNewComment={handleNewComment} />
      <CommentList>
        {comments.map((comment: IComment) => {
          return (
            <CommentItem key={comment.id}>
              <p>{comment.comment} </p>
              <label> {comment.author}</label>
            </CommentItem>
          );
        })}
      </CommentList>
    </CommentContainer>
  );
};

export default memo(Comments);
