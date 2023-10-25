import throttle from 'lodash.throttle'


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);

refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onInput, 500));

populateTextarea()

function onFormSubmit(e) {
    e.preventDefault();

    console.log('Дані з форми:');
    console.log('Email:', refs.input.value);
    console.log('Повідомлення:', refs.textarea.value);

    console.log('відправка форми')
    e.currentTarget.reset();

    localStorage.removeItem('feedback-form-message');
    localStorage.removeItem('feedback-form-email')

    onTextareaInput();
    onInput();
};

function onTextareaInput(e) {

    const message = e.currentTarget.value;
    localStorage.setItem('feedback-form-message', message);

};

function onInput(e) {
    const email = e.currentTarget.value;
    localStorage.setItem('feedback-form-email', email)
};

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-form-message');
    const savedEmail = localStorage.getItem('feedback-form-email')
    if (savedMessage && savedEmail) {

        refs.textarea.value = savedMessage;
        refs.input.value = savedEmail;
    }
};