const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');

//Event Handler
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInput();
});

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    //   location.replace(".../index.html");
      var uid = user.uid;
      
    } else {
      // User is signed out
      // ...
    }
  });

//Functions

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const password1Value = password1.value.trim();
    const password2Value = password2.value.trim();
    if (usernameValue === '') {
        showError(username, "Username can not be blank");
    } else {
        showSuccess(username);
    }

    if (emailValue === '') {
        showError(email, "Email ID can not be blank");
    } else if (!isEmailValid(emailValue)) {
        showError(email, "Email ID is not Valid");
    } else {
        showSuccess(email);
    }

    if (password1Value === '') {
        showError(password1, "Password can not be blank");
    } else {
        showSuccess(password1);
    }

    if (password2Value === '') {
        showError(password2, "Password can not be blank");
    } else if (password2Value != password1Value) {
        showError(password2, "Passwords not matched");
    } else {
        showSuccess(password2);
    }
    firebase.auth().createUserWithEmailAndPassword(emailValue, password1Value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.alert("check");
    location.replace(".../index.html");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("error");
    // ..
  });
}

function showError(input, msg) {
    const formcontrol = input.parentNode;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input) {
    const formcontrol = input.parentNode;
    formcontrol.className = 'form-control success';
}

function isEmailValid(emailValid) {
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(emailValid);
}