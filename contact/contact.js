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
    clearInputs(fname);
    clearInputs(lname);
    clearInputs(email);
    clearInputs(enquirey);
    subject.selectedIndex = subject.options[0];
  }

  function displayAlert(text, style) {
    alert.textContent = text;
    alert.classList.add(`alert-${style}`);
    // remove alert
    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-${style}`);
    }, 3000);
  }

  function clearInputs(input) {
    input.value = "";
  }
});
