function adduser() {
    alert("adding user!");
    var email= document.getElementById("username").value;
    var password= document.getElementById("pass").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

function login(){
    alert("Signing In");
    var email= document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
        alert("Error signing in");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}

function logout() {
    firebase.auth().signOut().then(function () {
        alert("Signed out!");
    }).catch(function (error) {
        // An error happened.});    }
    });
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        alert(user.email);
        console.log(user.toJSON());
    } else {
        // No user is signed in.
        alert("user not signed in");
    }
});