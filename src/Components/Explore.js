import { React, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grow from '@material-ui/core/Grow';
import Posts from "./Posts";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: "80%",
    marginLeft:'10%',
    marginTop: "2%",
  },
}));
function Explore(props) {
  const classes = useStyles();
  var p;

  const getData = () => {
      
    fetch("https://us-central1-sdhacks2021-6261c.cloudfunctions.net/app/api/notes/debug", {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
      }
    })
    // .then((response) => {
    //   p = response.data;
    //   console.log(p);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  props.inpArr.sort((a, b) => (a.votes > b.votes ? -1 : 1));
  return (
    <div className={classes.root}>
      <Button onClick={getData}></Button>
      {props.inpArr.length === 0 ? (
        <h1 style={{ marginLeft: "auto", marginRight: "auto" }}>
          No results found
        </h1>
      ) : (
        <Grid container spacing={5} justify="center">
          {props.inpArr.map((element, key) => (
            <Grow in={true} timeout={1500 + 40*key}>
              <Grid item>
                <Posts
                  title={element.title}
                  tagArr={element.tags}
                  votes={element.votes}
                  file={element.fileName}
                />
              </Grid>
            </Grow>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default Explore;
