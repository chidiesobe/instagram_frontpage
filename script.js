// variables declaration
var username = document.getElementById("username");
var password = document.getElementById("password");
var toggleButton = document.getElementById("hideShow");
var submitButton = document.getElementById("submit");
var passHolder = document.getElementById("pass_placeholder");
var userHolder = document.getElementById("user_placeholder");

var valuesObj = {};

// disable Log in button when the website is loaded
window.onload = () => {
  disableButton();
};

// check if username and password input element is empty
function checkinput() {
  if (username.value != "" && password.value != "") {
    submitButton.disabled = false;
    submitButton.style.cursor = "pointer";
    submitButton.style.transition = "0.8s";
    submitButton.style.backgroundColor = "#1f95f6";
  } else {
    disableButton();
  }

  //  password logic
  if (password.value != "") {
    toggleButton.style.visibility = "visible";
    passHolder.style.margin = "5px 0 0 20px";
    passHolder.style.fontSize = "9px";
  } else {
    disableButton();
    passHolder.style.margin = "16px 0 0 25px";
    passHolder.style.fontSize = "14px";
  }

  // username value check
  if (username.value != "") {
    userHolder.style.margin = "5px 0 0 20px";
    userHolder.style.fontSize = "9px";
  } else {
    userHolder.style.margin = "16px 0 0 25px";
    userHolder.style.fontSize = "14px";
  }
}

function hideShow() {
  // makes password visible
  if (password.type === "password") {
    password.type = "text";
    toggleButton.innerHTML = "Hide";
  } else {
    password.type = "password";
    toggleButton.innerHTML = "Show";
  }
}

// function to disable Log In button
function disableButton() {
  submitButton.disabled = true;
  submitButton.style.cursor = "auto";
  submitButton.style.backgroundColor = "#b4dffd";
  toggleButton.style.visibility = "hidden";
}
