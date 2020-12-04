
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCmPcQ6BwFR0uUoCXUSYAE8ryWpLJXU1Yo",
    authDomain: "kwitter-app-a452e.firebaseapp.com",
    databaseURL: "https://kwitter-app-a452e.firebaseio.com",
    projectId: "kwitter-app-a452e",
    storageBucket: "kwitter-app-a452e.appspot.com",
    messagingSenderId: "107879470222",
    appId: "1:107879470222:web:997897cc4a88aa3c4025df"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser ()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref ("/").child(user_name).update({

      });
  }