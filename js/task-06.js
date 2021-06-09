const inputToValidate = document.getElementById('validation-input')

function checkInput(text) {
    if (text.currentTarget.value.length === + inputToValidate.dataset.length) {
        inputToValidate.classList = 'valid';
    }else inputToValidate.classList = 'invalid';
}

inputToValidate.addEventListener('blur', checkInput);


