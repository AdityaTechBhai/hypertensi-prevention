// firebaseAdmin.js

/**
 * Initializes the Firebase Admin SDK and exports the Firestore database instance.
 * 
 * This module sets up the Firebase Admin SDK using a service account key file.
 * It ensures that the Firebase Admin SDK is initialized only once, even if this module is imported multiple times.
 * The Firestore database instance is then exported for use in other parts of the application.
 * 
 * @module firebaseAdmin
 */

import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Path to the service account key file
const serviceAccountPath = path.resolve('./token/firetokens.json');

// Read and parse the service account key file
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialize the Firebase Admin SDK if it hasn't been initialized already
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Get the Firestore database instance
const db = admin.firestore();

// Export the Firestore database instance
export { db };
