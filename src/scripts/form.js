const form = document.querySelector('.js-form');
const inputFields = form.getElementsByClassName('.js-input');

for (const item of inputFields) {
  item.addEventListener('blur', (event) => {
    validateform(event);
  });
}

const setError = (element, message) => {
  const errorSection = element.parentElement.querySelector('.form__error');
  errorSection.innerText = message;
  element.classlist.add('invalid');
  element.classlist.remove('valid');
};

const setValid = (element) => {
  const errorSection = element.parentElement.querySelector('.form__error');
  errorSection.innerText = '';
  element.classlist.remove('invalid');
  element.classlist.add('valid');
};

const validateName = (nameField) => {
  const regex = /^[a-zA-z]{2,30}$/;

  if (nameField.value === '') {
    setError(nameField, 'Name is required');
  } else if (!regex.test(nameField.value)) {
    setError(nameField, 'Name is incorrect');
  } else {
    setValid(nameField);
  }
};

const validateEmail = (emailField) => {
  const regex = /^[a-zA-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (emailField.value === '') {
    setError(emailField, 'Email is required');
  } else if (!regex.test(emailField.value)) {
    setError(emailField, 'Email is incorrect');
  } else {
    setValid(emailField);
  }
};

const validateform = (event) => {
  switch (event.target.id) {
    case 'name':
      validateName(event.target);
      break;
    case 'email':
      validateEmail(event.target);
      break;
    default:
      alert('Validation error');
  }
};
