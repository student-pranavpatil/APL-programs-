import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, TextField } from "@mui/material";

function MuiComp() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        <TextField label="Your Name" variant="outlined" fullWidth style={{ marginBottom: "20px" }} />
        <Button variant="contained" color="primary">Submit</Button>

        <Grid container spacing={2} style={{ marginTop: "20px" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Card 1</Typography>
                <Typography>Card content here.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
    
  );
}
export default MuiComp;