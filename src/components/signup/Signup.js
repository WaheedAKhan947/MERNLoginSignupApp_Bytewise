import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockPersonIcon from "@mui/icons-material/LockPerson";

function Signup() {
  return (
    <div id="signup">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ minWidth: 275, marginTop: 10 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 35, textAlign: "center" }}
              color="text.secondary"
              gutterBottom
            >
              <LockPersonIcon color="success" />
              <br />
              Sign Up
            </Typography>
            <Typography variant="body2" margin="10px">
              Please fill in this form to create an account!
            </Typography>
            <TextareaAutosize
              aria-label="FullName textarea"
              placeholder="FullName*"
              style={{
                width: "100% ",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <br />
            <TextareaAutosize
              aria-label="username textarea"
              placeholder="username*"
              style={{
                width: "100% ",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <br />
            <TextareaAutosize
              aria-label="email textarea"
              placeholder="email*"
              style={{
                width: "100% ",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <br />
            <TextareaAutosize
              aria-label="password textarea"
              placeholder="password*"
              style={{
                width: "100% ",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <br />
            <TextareaAutosize
              aria-label="conformPassword textarea"
              placeholder="Conform password*"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            />
            <br />
            <Button
              color="primary"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
              suppressHydrationWarning
              variant="contained"
              size="small"
            >
              Sign Up
            </Button>
            <Typography variant="body2" marginTop="10px">
              Already have an account?<a href="/">Login here</a>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Signup;
