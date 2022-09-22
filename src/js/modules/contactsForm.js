const massageForm = document.querySelector(".contacts__massage_form");
const massageEmail = document.querySelector(".contacts__massage_form-email");
const massageSms = document.querySelector(".contacts__massage_form1");
const massageButton = document.querySelector(".contacts__massage_button");

const cb = (event) => {
  let errMsg = "";

  if (massageForm.value == "") {
    errMsg = "Введите имя";
    massageForm.classList.add("err");
    event.stopPropagation();
  }
  if (massageEmail.value == "") {
    errMsg = "Введите email";
    massageEmail.classList.add("err");
    event.stopPropagation();
  }
  if (massageSms.value == "") {
    errMsg = "Введите смс";
    massageSms.classList.add("err");
    event.stopPropagation();
  }
  if (
    massageForm.value == "" &&
    massageEmail.value == "" &&
    massageSms.value == ""
  ) {
    errMsg = "Заполните поля";
  }

  if (errMsg !== "") {
    alert(errMsg);
  } else {
    alert("Отправленно");
  }
};

massageForm.addEventListener("input", () => {
  massageForm.classList.remove("err");
});
massageEmail.addEventListener("input", () => {
  massageEmail.classList.remove("err");
});
massageSms.addEventListener("input", () => {
  massageSms.classList.remove("err");
});

massageButton.addEventListener("click", cb);
