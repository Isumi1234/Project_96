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

      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");

      function send() 
      {
            message=document.getElementById("message").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:message,
                  like:0
            });

            document.getElementById("message").value="";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
