
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
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({purpose:"adding roomname"});
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="Let'sChat Web App_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}