const logIcon = document.getElementById("logIcon");

const spotifymusic = document.getElementById("spotifymusic");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      logIcon.innerHTML = "SignOut";
      var uid = user.uid;
    } else {
  
    }
});

logIcon.onclick = function() {
    if(logIcon.innerHTML === "SignOut") {
        firebase.auth().signOut().then(() => {
            logIcon.innerHTML = "SignIn";
          }).catch((error) => {
            // An error happened.
          });
    } else {
        window.open("../Auth/signin_page/signin.html");
    }
};

spotifymusic.onclick = function() {
    if(logIcon.innerHTML === "SignOut") {
        window.open("../spotify_music/index.html");
    } else {
        window.open("../Auth/signin_page/signin.html");
    }
}

