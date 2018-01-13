$(document).ready(function(){

startGame();

var config = {
    apiKey: "AIzaSyCWSo3yZmMN6mpevrQKoZyflnm3CGeP73Y",
    authDomain: "rps-multiplayer-1e209.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-1e209.firebaseio.com",
    projectId: "rps-multiplayer-1e209",
    storageBucket: "rps-multiplayer-1e209.appspot.com",
    messagingSenderId: "285509072248"
};
  
firebase.initializeApp(config);

var database = firebase.database();

var name = "";

var playerOneWins = 0;
var playerTwoWins = 0;
var playerTwoWins = 0;
var playerTwoWins = 0;

//create on click function for name value

$("#add-name").on("click", function() {
    
    event.preventDefault();

    var name = $("#name-input").val().trim();
    
    database.ref().set({
        name: name,
    });
});

database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().name)
    
    $("#playerOneName").html(snapshot.val().name);

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);

});




function startGame(){
    name = [];
}


});