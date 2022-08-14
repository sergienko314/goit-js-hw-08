import throttle from 'lodash.throttle';
const onEmail = document.querySelector('[name="email"]');
const onMessage = document.querySelector('[name="message"]');
const onForm = document.querySelector('.feedback-form');
onForm.addEventListener('input', throttle(onInput, 500));

let FEEDBACK_FORM = 'feedback-form-state';
let formData = {};
function onInput(event) {
  // if (onMessage.value.trim() === '' || onEmail.value.trim() === '') {
  //   return alert('Пустое поле!!!');
  // }
  let formData = {
    email: onEmail.value,
    message: onMessage.value,
  };

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function getFormValue() {
  let saveFeedback = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  if (saveFeedback) {
    onEmail.value = saveFeedback.email;
    onMessage.value = saveFeedback.message;
  }
  formData = saveFeedback;
}
getFormValue();

onForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (onMessage.value.trim() !== '' && onEmail.value.trim() !== '') {
    console.log(formData);
    onForm.reset();
    localStorage.removeItem(FEEDBACK_FORM);
  }
}
