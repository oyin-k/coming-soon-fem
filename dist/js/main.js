
let email = document.querySelector('.main-content__input-field');

function formValidation(input) {
    
    let element = document.querySelector('.input-requirements');
    let requirementFeedback = element.children[0];

    if ( input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g) ) {
        requirementFeedback.classList.add('valid');
        email.classList.add('valid');
        requirementFeedback.classList.remove('invalid');
    } else {
        requirementFeedback.classList.remove('valid');
        email.classList.remove('valid');
        requirementFeedback.classList.add('invalid');
    }
}

email.addEventListener('keyup', function() {
    formValidation(email);
});