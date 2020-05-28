let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let web = document.querySelector('#web');
let message = document.querySelector('#message');
let checkbox = document.querySelector('#checkbox');
let date = document.querySelector('#date');
let button = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const nameRegex = /^[a-z ,.'-]+$/i;
    if (!name.value.match(nameRegex)) {
        console.log("Name is not correct!");
    }

    const mailRegex = /^[a-z_]+@[a-z-_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.value.match(mailRegex)) {
        console.log("Mail is not correct");
    }

    const phoneRegex = /^(\+\d{1,3}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (!phone.value.match(phoneRegex)) {
        console.log("Phone is not correct!");
    }

    const webRegex = /^((https?):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    if (!web.value.match(webRegex)) {
        console.log("Website is not correct!")
    }

    if (message.value < 1) {
        console.log("Message is wrong");
    }

    if (!checkbox.checked) {
        console.log("Check the box");
    }
});



