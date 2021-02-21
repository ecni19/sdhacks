import React from "react";
import Posts from "./Posts";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "100%",
    marginTop: "2%",
  },
}));
function Explore(props) {
  const classes = useStyles();
  props.inpArr.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  return (
    <div className={classes.root}>
      {props.inpArr.length === 0 ? (
        <h1 style={{marginLeft:'auto', marginRight:'auto'}}>No results found</h1>
      ) : (
        <Grid container spacing={4} justify="center">
          {props.inpArr.map((element) => (
            <Grid item>
              <Posts
                title={element.title}
                tagArr={element.tags}
                votes={element.votes}
                file={element.fileName}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Explore;
