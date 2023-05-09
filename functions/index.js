const functions = require("firebase-functions");
const cors = require("cors")({origin: true});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.registerUser = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === "POST") {
      res.send("User Register");
    } else {
      res.status(400).send("Invalid request method");
    }
  });
});

exports.loginUser = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === "POST") {
      res.send("User logged!");
    } else {
      res.status(400).send("Invalid request method");
    }
  });
});

