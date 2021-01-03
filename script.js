const form = document.getElementById('form');
const email = document.getElementById('email')

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const emailValue = email.value.trim();


    if (emailValue === '') {
        setErrorfor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorfor(email, 'Please provide a valid email address');
    } else {
        setSuccessFor(email);
    }

}




function setErrorfor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');


    // add error message inside small
    small.innerText = message;

    // add error clsss
    formControl.className = 'form-control error';

}



function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}



function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}