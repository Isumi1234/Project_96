
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAhj1dj5hssTw4yVZgJ8eQJguKjYR-QHK0",
      authDomain: "kwitter-6a09f.firebaseapp.com",
      databaseURL: "https://kwitter-6a09f-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a09f",
      storageBucket: "kwitter-6a09f.appspot.com",
      messagingSenderId: "597953402222",
      appId: "1:597953402222:web:bf6a0e094ee5efd2809d7f"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
