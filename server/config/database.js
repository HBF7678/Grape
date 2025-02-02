// Firebase configuration will be defined here
const admin = require('firebase-admin');

const serviceAccount = require('path/to/your/serviceAccountKey.json'); // Update with your service account key path

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<your-database-name>.firebaseio.com" // Update with your database URL
});

const db = admin.firestore();

module.exports = db;
