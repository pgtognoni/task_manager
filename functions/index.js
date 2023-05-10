const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.registerUser = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    try {
      res.send("User Register");
    } catch (error) {
      res.send("Invalid request method", error);
    }
  });
});

exports.loginUser = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    try {
      res.send("User logged!");
    } catch (error) {
      res.send("Invalid request method", error);
    }
  });
});

