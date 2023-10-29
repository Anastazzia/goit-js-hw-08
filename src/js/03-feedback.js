import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('.feedback-form');

const FEEDBACK_KEY = localStorage.getItem('feedback-form-state')

function onPageStorage() {
    if (localStorage.getItem(FEEDBACK_KEY)) {
        feedbackForm.elements.email.value = JSON.parse(localStorage.getItem(FEEDBACK_KEY).email);
        feedbackForm.elements.message.value = JSON.parse(localStorage.getItem(FEEDBACK_KEY).message);
    }
};

onPageStorage()

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onInputChange, 500));


const feedbackValues = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
function onInputChange(e) {
    feedbackValues[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackValues));
};

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_KEY);
    console.log(feedbackValues);
}