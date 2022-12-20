const registerButton = document.querySelector('#button1');
const loginButton = document.querySelector('#button2');
const result = document.querySelector('.response');
const result2 = document.querySelector('.response2');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');


registerButton.addEventListener('click', function (e) {
    console.log(input2.value);

    const req = new XMLHttpRequest();

    req.onload = function () {
        result.innerHTML = req.response;
    }

    req.open(`POST`, `https://register-and-login.onrender.com/api/register?mail=${input1.value}&password=${input2.value}`)

    req.send();
});

loginButton.addEventListener('click', function (e) {
    const req = new XMLHttpRequest();

    req.onload = function () {
        result2.innerHTML = req.response;
    }

    req.open(`GET`, `https://register-and-login.onrender.com/api/login?mail=${input3.value}&password=${input4.value}`)

    req.send();
});