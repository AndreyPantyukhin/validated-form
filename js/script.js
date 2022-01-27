let form = document.querySelector(".formWithValidation");
let validateBtn = form.querySelector(".validateBtn");
let from = form.querySelector(".name");
let fromm = form.querySelector(".surname");
let email = form.querySelector(".email");
let password = form.querySelector(".password");
let passwordConfirmation = form.querySelector(".passwordConfirmation");
let date = form.querySelector(".date");
let birthday = form.querySelectorAll(".birthday");
let fields = form.querySelectorAll(".field");

let generateError = function (text) {
  let error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};

let removeValidation = function () {
  let errors = form.querySelectorAll(".error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

let checkFieldsPresence = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
      let error = generateError("Необходимо заполнить");
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

let testName = function () {
  let reg = /[A-Za-zА-Яа-яЁё]/;
  if (!reg.test(from.value)) {
    console.log("incorrect name");
    let error = generateError("Недопустимое имя");
    from.parentElement.insertBefore(error, from);
  }
  
  else {
    console.log("correct name");
  }
};

let testSurname = function () {
  let reg2 = /[A-Za-zА-Яа-яЁё]/;
  if (!reg2.test(fromm.value)) {
    console.log("incorrect surname");
    let error = generateError("Недопустимая фамилия");
    fromm.parentElement.insertBefore(error, fromm);
  }
  
  else {
    console.log("correct surname");
  }
};

let validMail = function () {
  let reg3 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg3.test(email.value)) {
    console.log("incorrect email");
    let error = generateError("Проверьте правильность введенного e-mail");
    email.parentElement.insertBefore(error, email);
  }

  else {
    console.log("correct email");
  }
};

let checkPassword = function () {
  let reg4 = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  if (!reg4.test(password.value)) {
    console.log("invalid password");
    let error = generateError("Некорректный пароль");
    password.parentElement.insertBefore(error, password);
  }

  else {
    console.log("valid email");
  }
};

let checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log("not equals");
    let error = generateError("Пароли не совпадают");
    password.parentElement.insertBefore(error, password);
  }
};

let dateCheck = function () {
  
  let t = new Date();
  let y = form.querySelector('#year').options[document.getElementById("year").selectedIndex].value;
  let m = form.querySelector('#month').value;
  let d = form.querySelector('#day').value;
  console.log(form.querySelector('#month').value);
  console.log(form.querySelector('#day').value);
  let a = ( t.getFullYear() - y - ((t.getMonth() - --m||t.getDate() - d)<0) );

  if (a < 18) {
    console.log("not old enought");
    alert ("Возраст регистрации должен быть не младше 18 лет");
  }

  else {
    console.log("old enought");
  }
};


form.addEventListener("submit", function (event) {
  event.preventDefault();

  removeValidation();

  checkFieldsPresence();

  testName();

  testSurname();

  validMail();

  checkPassword ();

  checkPasswordMatch();

  dateCheck();
});