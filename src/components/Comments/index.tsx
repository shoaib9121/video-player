import { memo, useEffect, useState } from "react";
import { CommentContainer, CommentList, CommentItem } from "./styled";
import { IComment } from "../../types";
import CommentForm from "./CommentForm";
import { useAuth } from "../../hooks/useAuth";
import { sortByDate, timeAgo } from "../../utils";

const Comments: React.FC<{ comments: IComment[] }> = (props): JSX.Element => {
  const [comments, setComments] = useState<IComment[]>(props.comments || []);
  const { user } = useAuth();

  useEffect(() => {
    setComments(sortByDate(props.comments));
  }, [props.comments]);

  const handleNewComment = (comment: string) => {
    const tempComments = [...comments];
    tempComments.push({
      comment,
      author: user.username,
      createdAt: new Date().toISOString(),
      id: Math.floor(Math.random() * 1000),
    });
    setComments(sortByDate(tempComments));
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
              <span>{timeAgo(comment.createdAt)}</span>
            </CommentItem>
          );
        })}
      </CommentList>
    </CommentContainer>
  );
};

export default memo(Comments);
