var firebaseConfig = {
    apiKey: "AIzaSyBKuvUnV8y3RjFwmPlroOVJLMoV4C32-1c",
    authDomain: "kwitter2-6bc60.firebaseapp.com",
    databaseURL: "https://kwitter2-6bc60-default-rtdb.firebaseio.com",
    projectId: "kwitter2-6bc60",
    storageBucket: "kwitter2-6bc60.appspot.com",
    messagingSenderId: "158206848406",
    appId: "1:158206848406:web:dcca8b59a464e3dd5541b7",
    measurementId: "G-THNPZH9T9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome : " +user_name;
  
  function addRoom(){
  add_room=document.getElementById("room_name").value;
  firebase.database().ref("/").child(add_room).update({
  purpose : "adding the room name"
  });
  localStorage.setItem("roomname" , add_room);
  
  window.location="chatter.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    room_names = childKey;
   //Start code
   console.log("room name = " + Room_names);
   column="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
