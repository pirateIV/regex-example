const form = document.querySelector("form");
// console.log(form)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const inputs = document.querySelectorAll(".input");

form.addEventListener("submit", validateForm);

function checkSubmission() {
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      if (input.id === "email" && emailPattern.test(emailInput.value)) {
        validateMessage("success", "success", "error");
      } else if (
        input.id === "password" &&
        passwordPattern.test(passwordInput.value)
      ) {
        validateMessage("success", "success", "error");
      } else {
        validateMessage("error", "error", "success");
      }
    });

    function validateMessage(text, removed, added) {
      validationMessage.innerHTML = text;
      input.classList.remove(added);
      input.classList.add(removed);
    }
  });
}
checkSubmission();

function validateForm(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries());

  submissionInfo.innerHTML = `
          <p>Email: ${formObject.email}</p>
          <p>Password: ${formObject.password}</p>
        `;
  console.log(formObject);

  console.log(e);
}

// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordPattern =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
  const validationMessage = document.getElementById('validationMessage')

  const email = emailInput.value;
  const password = passwordInput.value

  if (!validateEmail(email)) {
    validationMessage.innerText = "Invalid email";
    emailInput.focus();
    return;
  }
  if (!validatePassword(password)) {
    validationMessage.innerText = "Invalid password";
    passwordInput.focus();
    return;
  }
   // Submit form using FormData API
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData.entries())

  console.log(formObject)
  validationMessage.innerText = 'Form submitted successfully'
});


function validateEmail(email) {
    return emailPattern.test(email)
}
function validatePassword(password) {
  return passwordPattern.test(password)
}

