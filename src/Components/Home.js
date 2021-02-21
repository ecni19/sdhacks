import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width:"100%",
    height:"90vh",
  },
  h1Style: {
    fontSize: "70pt",
    marginBottom: '0px'
  },
  h2Style: {
    fontSize: "32pt"
  }
})

function Home() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);


  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Slide direction="right" in={true} timeout={1700}>
        <h1 className={classes.h1Style}>Lurn</h1>
      </Slide>
      <Slide direction="right" in={true} timeout={1700}>
        <h2 className={classes.h2Style}>
          An opensource learning resource for everyone
        </h2>
      </Slide>
    </Grid>
  );
}

export default Home;