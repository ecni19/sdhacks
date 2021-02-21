const admin = require("firebase-admin");
const {Storage} = require('@google-cloud/storage');
const serviceAccount = require("./sdhacks2021-6261c-firebase-adminsdk-y8w4v-dea35caf7e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "sdhacks2021-6261c.appspot.com",
});

var bucket = admin.storage().bucket();

const uploadFile = (req, res) => {
  // the front end will give me a file path/file
  // physics_hw
  // +
  // user_name (for now)
  // ^^^ Biiiiiiig security risk

  const options = {
    destination: `dummy_thicc`,
    resumable: true,
    validation: "crc32c",
    metadata: {
      metadata: {
        event: "Fall trip to the zoo",
      },
    },
  };

  // assuming client gives us the file path
  bucket
    .upload(`${req.body.filepath}`, options)
    .then(() => {
      console.log("Uploaded Succesfully");
      res.json("Uploaded Successfully");
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
