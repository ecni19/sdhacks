import { React, useState } from "react";
import "./Posts.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "300px",
    boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.15)",
    borderRadius: "15px",
  },
  btn: {
    // border: 'solid black 2px',
    padding: 0,
    margin: 0
    
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  // const [tags] = useState(props.tagArr);
  const [votes, setVotes] = useState(props.votes);
  const [incIsSet, setIncIsSet] = useState(false);
  const [decIsSet, setDecIsSet] = useState(false);
  const [incColor, setIncColor] = useState("");
  const [decColor, setDecColor] = useState("");

  const handleInc = () => {
    if (decIsSet === true) {
      setVotes(votes + 2);
      setDecIsSet(false);
      setIncIsSet(true);
      setDecColor("");
      setIncColor("primary");
    } else if (incIsSet === false) {
      setVotes(votes + 1);
      setIncIsSet(true);
      setIncColor("primary");
      setDecColor("");
    } else if (incIsSet === true) {
      setVotes(votes - 1);
      setIncIsSet(false);
      setIncColor("");
    }
  };

  const handleDec = () => {
    if (incIsSet === true) {
      setVotes(votes - 2);
      setDecIsSet(true);
      setIncIsSet(false);
      setDecColor("primary");
      setIncColor("");
    } else if (decIsSet === false) {
      setVotes(votes - 1);
      setDecIsSet(true);
      setDecColor("primary");
      setIncColor("");
    } else if (decIsSet === true) {
      setVotes(votes + 1);
      setDecIsSet(false);
      setDecColor("");
    }
  };

  const displayTags = props.tagArr.join(", ");

  const history = useHistory();
  const displaySearch = (el) => {
    history.push("/search");
    history.push('?s='+ el.target.innerText);

    var url = window.location.href;
    var parts = url.split("/");
    var lastPart = (url.lastIndexOf('/') !== url.length - 1 
    ? parts[parts.length - 1] : parts[parts.length - 2]);
    if (lastPart !=="explore") {
      window.location.reload(false);
    }
    // var lastPart = url.substr(url.lastIndexOf('/'), url.lastIndexOf('/') + 8);
    // if (lastPart === "/explore") {
    //   window.location.reload(false);
    // }    
  }

  const displaySearchTags = () => {
    return props.tagArr.map((el) => {
      return <Button className={classes.btn} onClick={displaySearch}>{el}</Button>;
    });
  };
  
  const fileRequest = "https://us-central1-sdhacks2021-6261c.cloudfunctions.net/app/api/files/get/" + props.file;
  const fileGotten = () => (axios.get(fileRequest)
    .then ((response) => {
      return response.data[0];
    }) 
    .catch ((error) => {
      console.log(error);
    })
  )

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <a href={fileGotten()} target="_blank" rel="noreferrer" className="link">
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
          </a>
          <br />
          {/* {displayTags} */}
          {displaySearchTags()}
        </CardContent>
        <CardActions>
          <label htmlFor="icon-button-file">
            <IconButton
              color={incColor}
              aria-label="upvote"
              component="span"
              onClick={handleInc}
            >
              <ArrowUpward />
            </IconButton>
          </label>
          <div>{votes}</div>
          <label htmlFor="icon-button-file">
            <IconButton
              color={decColor}
              aria-label="downvote"
              component="span"
              onClick={handleDec}
            >
              <ArrowDownward />
            </IconButton>
          </label>
        </CardActions>
      </Card>
    </div>
  );
}
