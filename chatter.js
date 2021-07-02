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
  firebase.initializeApp(firebaseConfig);

var room_name=localStorage.getItem("roomname");
var user_name=localStorage.getItem("username");


function messenger(){
message=document.getElementById("send_message").value;
firebase.database().ref(room_name).push({
messager:message,
likes:0,
yourname:user_name
});
document.getElementById("send_message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
} });  }); }
getData();