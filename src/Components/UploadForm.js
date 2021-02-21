import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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

  const handleSubmit = async e => {
    // maybe make it so that you can only submit if all 3 fields have someting
    // e.preventDefault();
    // const response = await fetch (`${req.body.filepath}`, {
    //   method: 'POST',
    //   headers: {
        
    //   }
    //   body: JSON.stringify({ post: file })
    // })
    alert(title + " [" + tags + "] " + file);
    const votes = 0;
  }

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center">
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <TextField
                style={{ width: "800px", height: "75px" }}
                id="standard-basic"
                label="Title"
                onChange={e => setTitle(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item>
              <TextField
                style={{ width: "800px", height: "75px" }}
                id="standard-basic"
                label="Tags (separate with commas)"
                onChange={e => setTags(e.target.value.split(','))}
              />
            </Grid>
          </Grid>
          <Grid container direction="column">
            <Grid item>
              <Button
                variant="contained"
                component="label"
                style={{ width: "150px", height: "35px" }}
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
                style={{ width: "150px", height: "35px", float: "right" }}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </Grid>
            <Grid item>{showFile()}</Grid> {/* fix if have time */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadForm;
