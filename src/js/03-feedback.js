const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  text: document.querySelector('textarea'),
  button: document.querySelector('button'),
};
// console.log(refs);

const template = {
  email: '',
  massage: '',
};

const payload = fetchData();
loadData(payload);

refs.form.addEventListener('submit', event => {
  event.preventDefault();
});

refs.form.addEventListener('input', pushData);

refs.button.addEventListener('click', () => {
  if (refs.input.value === '' || refs.text.value === '') {
    console.log('all fields must be filled');
    return;
  }
  console.log(`you send payload:`, payload);
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
});

function pushData(event) {
  switch (event.target.name) {
    case 'email':
      payload.email = event.target.value;
      break;
    case 'message':
      payload.massage = event.target.value;
      break;

    default:
      break;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(payload));
}
function fetchData() {
  try {
    return JSON.parse(localStorage.getItem('feedback-form-state')) || template;
  } catch (error) {
    console.log(`can't load data`);
    return template;
  }
}

function loadData(payload) {
  refs.input.value = payload.email;
  refs.text.value = payload.massage;
}
