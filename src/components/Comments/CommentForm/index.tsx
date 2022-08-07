import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { FormContainer } from "./styled";

const CommentForm: FC<{ handleNewComment: (comment: string) => void }> = (
  props
): JSX.Element => {
  const { handleNewComment } = props;
  const [newComment, setNewComment] = useState("");

  return (
    <FormContainer>
      <Grid
        container
        wrap="nowrap"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <AccountCircle style={{ fontSize: 50, color: "#cb8134" }} />
        </Grid>
        <Grid item xs={10}>
          <TextField
            placeholder="Enter comment"
            value={newComment}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === "Enter") {
                handleNewComment(e.target.value);
                setNewComment("");
              }
            }}
            sx={{ width: "100%" }}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            disabled={!newComment}
            onClick={() => {
              handleNewComment(newComment);
              setNewComment("");
            }}
            style={{ height: "55px" }}
          >
            Comment
          </Button>
        </Grid>
      </Grid>
    </FormContainer>
  );
};

export default CommentForm;
