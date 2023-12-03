const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const enquirey = document.querySelector("#enquirey");
const submit = document.querySelector(".submit-btn");
const alert = document.querySelector(".alert");

submit.addEventListener("click", (e) => {
  let inputChecker = true;
  e.preventDefault();
  checkEmpty(fname);
  checkEmpty(lname);
  checkEmpty(email);
  checkEmpty(subject);
  checkEmpty(enquirey);
  function checkEmpty(input) {
    if (!input.value) {
      displayAlert("Input field empty", "red");
      inputChecker = false;
    }
  }
  if (inputChecker) {
    displayAlert("Enquirey Submitted", "green");
  }

  function displayAlert(text, style) {
    alert.textContent = text;
    alert.classList.add(`alert-${style}`);
    // remove alert
    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-${style}`);
    }, 2000);
  }
});
