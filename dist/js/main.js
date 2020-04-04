let userEmailInput = document.querySelector(".main-content__input-field");
let form = document.querySelector(".main-content__user-email-form");

function formValidation(input) {
  let element = document.querySelector(".input-requirements");
  let requirementFeedback = element.children[0];

  if (input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)) {
    requirementFeedback.classList.add("valid");
    userEmailInput.classList.add("valid");
    requirementFeedback.classList.remove("invalid");
    return true;
  } else {
    requirementFeedback.classList.remove("valid");
    userEmailInput.classList.remove("valid");
    requirementFeedback.classList.add("invalid");
    return false;
  }
}

userEmailInput.addEventListener("keyup", () => {
  formValidation(userEmailInput);
});

form.addEventListener("submit", e => {
  if (formValidation(userEmailInput)) {
    e.preventDefault();
    console.log(e.target.email.value);
    e.target.email.value = "";
  } else {
    e.preventDefault();
    e.target.email.value;
  }
});
