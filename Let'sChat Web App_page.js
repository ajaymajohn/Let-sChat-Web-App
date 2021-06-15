//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD8r9fTdiJzDpMuEQavlAMeCU7r6Yy2Zy4",
      authDomain: "let-schat-web-app.firebaseapp.com",
      databaseURL: "https://let-schat-web-app-default-rtdb.firebaseio.com",
      projectId: "let-schat-web-app",
      storageBucket: "let-schat-web-app.appspot.com",
      messagingSenderId: "968942713652",
      appId: "1:968942713652:web:fb870885bd75e0e3d34361"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
