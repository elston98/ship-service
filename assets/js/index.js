firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.

        window.location = "main.html";


    } else {
        // No user is signed in.

        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

    }
});

function login() {

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);

        // ...
    });

}

function logout() {
    firebase.auth().signOut();
    window.location = "index.html";
    console.log("Signed out");

}

function check() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            document.getElementById("mybtn").style.display = "block";
            //  document.getElementById("mybtn2").style.display = "none";

        } else {
            // No user is signed in.
            document.getElementById("mybtn").style.display = "none";
            //   document.getElementById("mybtn2").style.display = "block";
            window.location = "index.html";


        }
    });


}