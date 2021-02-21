import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import ExploreIcon from "@material-ui/icons/Explore";

import UploadForm from "./UploadForm";
import Home from "./Home";
import Explore from "./Explore";
import SearchResults from './SearchResults';

import {arr} from './dummy';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function ButtonAppBar() {
  const history = useHistory();

  const [finalQuery, setQuery] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    /* console.log(event.target.value); */
    setQuery(event.target.value);
  };
  const displaySearch = (e) => {
    if (e.keyCode === 13) {
      if(finalQuery === "") alert("Please enter text");
      else {
        history.push("/search");
        history.push('?s='+finalQuery);
        window.location.reload(false);
      }
    }
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{textDecoration:"none", variant:"h6", color:"white"}}>Lurn</Link>
            </Typography>
            <IconButton>
              <Link to="/explore">
                <ExploreIcon style={{ color: "white" }} fontSize="large" />
              </Link>
            </IconButton>
            <IconButton>
              <Link to="/upload">
                <AddIcon style={{ color: "white" }} fontSize="large" />
              </Link>
            </IconButton>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                onChange={handleChange}
                onKeyDown={displaySearch}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path="/upload">
          <UploadForm />
        </Route>
        <Route path="/explore">
          <Explore inpArr={arr}/>
        </Route>
        <Route path="/search">
          <SearchResults allPosts={arr}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default ButtonAppBar;
