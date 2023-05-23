import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const formState = {
  email: '',
  message: '',
};

(() => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (!savedState) {
    return;
  }

  const { email, message } = JSON.parse(savedState);

  emailInput.value = email;
  messageInput.value = message;
})();

const saveFormState = throttle(() => {
  formState.email = emailInput.value;
  formState.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

form.addEventListener('input', saveFormState);

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Form submitted with values:', {
    email: formState.email,
    message: formState.message,
  });

  localStorage.removeItem('feedback-form-state');

  form.reset();

  formState.email = '';
  formState.message = '';
});
