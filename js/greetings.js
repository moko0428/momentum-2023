// const form = document.querySelector("form");
// const rangeInput = document.querySelector(".rangeNumber input");
// const guessInput = document.querySelector("input:last-child");

// function randomNumber() {
//   const random = Math.ceil(Math.random() * randomNumber.value);
//   console.log(random);
// }

// // rangeInput.addEventListener("click", randomNumber);
// form.addEventListener("submit", randomNumber);
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

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
  greeting.innerText = `Hello ${username}`;
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
