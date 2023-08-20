const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(username);
  console.log("painting", username); //2
}

function paintGreetings(username) {
  //1
  greeting.classList.remove(HIDDEN_CLASSNAME);

  greeting.innerText = `좋은 하루에요. ${username} 님`;
  console.log("paintingfunc", username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
  console.log("paintingSave", savedUsername); //2
}
