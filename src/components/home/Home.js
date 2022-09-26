import React from "react";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
function Home() {
  return (
    <div>
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#1976d2",
          height: "15vh",
          color: "black",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography>Bytewise MERN Task 06 By Dev.Waheed</Typography>
        <Button variant="contained" color="error"> Logout</Button>
      </Container>
      <Grid>
        <Typography variant="h4" marginTop="60px" textAlign="center" paddingBottom="54vh">Welcome To the Home Page of the site!</Typography>
      </Grid>
    </div>
  );
}

export default Home;
