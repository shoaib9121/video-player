import { memo, useEffect, useState } from "react";
import { CommentContainer, CommentList, CommentItem } from "./styled";
import { IComment } from "../../types";
import CommentForm from "./CommentForm";
import { useAuth } from "../../hooks/useAuth";
import { sortByDate, timeAgo } from "../../utils";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

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
              <Paper
                variant="outlined"
                elevation={1}
                sx={{ p: 2, background: "#f6f6f6" }}
              >
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <AccountCircle style={{ fontSize: 50 }} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <Typography
                      variant="body1"
                      display="flex"
                      justifyContent="space-between"
                      gutterBottom
                    >
                      {comment.author}
                      <Typography
                        variant="caption"
                        component="span"
                        color="gray"
                      >
                        {timeAgo(comment.createdAt)}
                      </Typography>
                    </Typography>
                    <Typography
                      className="comment"
                      variant="body2"
                      display="block"
                      gutterBottom
                    >
                      {comment.comment}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </CommentItem>
          );
        })}
      </CommentList>
    </CommentContainer>
  );
};

export default memo(Comments);
