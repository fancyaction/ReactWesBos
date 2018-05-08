import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6YG9OmfGhbV_D27n-YGgHeBIOpKOijHk",
  authDomain: "catch-of-the-day-fancyaction.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fancyaction.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;
