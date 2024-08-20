import React from "react";
import Grid from "@mui/material/Grid";
import CanvasGroup from "./playerHome";
import Overlay from "./overlay";

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <Overlay />
      </Grid>
      <Grid item xs={5}>
        <CanvasGroup />
      </Grid>
    </Grid>
  );
};

export default HomePage;
