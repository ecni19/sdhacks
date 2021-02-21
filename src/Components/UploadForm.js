import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grow from '@material-ui/core/Grow';
// import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import { storage } from "../firestore";
import firebase from "firebase/app";
import "firebase/storage";

import "./UploadForm.css";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    display: "flex",
    alignItems: "center",
    height: "60vh",
    width: "100%",
  },
}));

function UploadForm() {
  const [isFileSel, setIsFileSel] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
    setIsFileSel(true);
  };
  
  const showFile = () => {
    if (isFileSel === true) {
      return (
        <div>
          <p>{fileName}</p>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    // maybe make it so that you can only submit if all 3 fields have someting

    alert(title + " [" + tags + "] " + file);
    // const votes = 0;

    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(file.name);
    fileRef.put(file).then( () => {
        console.log(fileRef.path);
        console.log("it uploaded?? D:");
    });

  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Grid container direction="column">
            <Grow in={true} timeout={1500}>
              <Grid item>
                <TextField
                  style={{ width: "800px", height: "75px" }}
                  id="standard-basic"
                  label="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
            </Grow>
          </Grid>
          <Grid container direction="column">
            <Grow in={true} timeout={1750}>
              <Grid item>
                <TextField
                  style={{ width: "800px", height: "75px", marginTop: "10px" }}
                  id="standard-basic"
                  label="Tags (separate with commas)"
                  onChange={(e) => setTags(e.target.value.split(","))}
                />
              </Grid>
            </Grow>
          </Grid>
          <Grid container direction="column">
            <Grow in={true} timeout={2000}>
              <Grid item>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  style={{ width: "150px", height: "35px", boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.15)",}}
                >
                  Upload File
                  <input
                    type="file"
                    hidden
                    id="upload-file"
                    onChange={onFileChange}
                  ></input>
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  style={{width: "150px", height: "35px", float: "right", boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.15)"}}
                  onClick={handleSubmit}
                >
                  Post
                </Button>
                <Grid item style={{ marginBottom: "-100px" }}>
                  <div>{showFile()}</div>
                </Grid>
              </Grid>
            </Grow>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadForm;
