import { React, useState } from "react";
import "./Posts.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles({
  root: {
    width: "300px",
    boxShadow: "2px 4px 7px rgba(0, 0, 0, 0.15)",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [tags] = useState(props.tagArr);
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

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <a href={props.file} target="_blank" className="link">
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
          </a>
          <br />
          {displayTags}
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
