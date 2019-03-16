import * as firebase from "firebase";

import {
  firebaseAPIKey,
  firebaseDatabaseURL,
  firebaseProjectID
} from "../../config";

export let initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: firebaseAPIKey,
    databaseURL: firebaseDatabaseURL,
    projectId: firebaseProjectID
  });
};

export let saveImage = async record => {
  if (!firebase.apps.length) {
    initializeFirebase();
  }

  const docRef = await firebase
    .firestore()
    .collection("/images")
    .add(record);

  console.log(docRef);
  return docRef;
};

export let readAllImages = async () => {
  if (!firebase.apps.length) {
    initializeFirebase();
  }

  const snapshot = await firebase
    .firestore()
    .collection("/images")
    .get();

  return snapshot.docs;
};

export let readImage = async id => {
  if (!firebase.apps.length) {
    initializeFirebase();
  }
  const snapshot = await firebase
    .firestore()
    .ref("/images/" + id)
    .on("value");

  return snapshot.val();
};

export let deleteImage = async id => {
  if (!firebase.apps.length) {
    initializeFirebase();
  }

  await firebase
    .firestore()
    .ref("/images" + id)
    .remove();
};
