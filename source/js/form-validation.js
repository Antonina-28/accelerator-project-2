const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const sectionForm = document.querySelector('.form__sending');
const formButton = document.querySelector('.form__sending .form__button');

function filterPhoneInput() {
  phoneInput.value = phoneInput.value.replace(/[^+\d]/g, '');
}

function validatePhone() {
  const phonePattern = /^\+\d+$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneInput.classList.add('error');
    return false;
  }
  phoneInput.classList.remove('error');
  return true;
}

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('error');
    return false;
  }
  emailInput.classList.remove('error');
  return true;
}

export function validateForm() {
  phoneInput.addEventListener('input', filterPhoneInput);

  formButton.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = validatePhone() && validateEmail();
    if (isValid) {
      sectionForm.submit();
    }
  });
}
