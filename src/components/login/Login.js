import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  return (
    <div id="login">
      <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
      >
        <Card sx={{ minWidth: 275,marginTop:10}}>
          <CardContent>
            <Typography
              sx={{ fontSize: 35 , textAlign:"center"}}
              color="text.secondary"
              gutterBottom
            >
              <LockIcon color="success" />
              <br />
              Login
            </Typography>
            <TextareaAutosize
              aria-label="username textarea"
              placeholder="username*"
              style={{ width: "100% " , display:"flex",justifyContent:"center",}}
            />
            <br />
            <TextareaAutosize
              aria-label="password textarea"
              placeholder="password*"
              style={{ width: "100%" , display:"flex",justifyContent:"center",}}
            />
            <br />
            <Button color="primary" style={{width:"100%" , display:"flex", justifyContent:"center"}} suppressHydrationWarning variant="contained" size="small" >
              Sign in
            </Button>
            <Typography variant="body2" marginTop="10px">
              <a href="/">forget password?</a>
              <br />
              Don't have an account?<a href="/">Sign Up</a>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Login;
