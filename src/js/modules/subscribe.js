function subscr(slBtn, slImput) {
  const subscribeBtn = document.querySelector(slBtn);
  const input = document.querySelector(slImput);

  const cb = (event) => {
    if (input.value == "") {
      alert("Укажите EMAIL!");
      input.classList.add("err");
      event.stopPropagation();
    } else {
      alert("Вы подписаны!");
    }
  };

  subscribeBtn.addEventListener("click", cb);
  input.addEventListener("input", () => {
    input.classList.remove("err");
  });
}

document.body.addEventListener("click", (event) => {
  if (!event.target.classList.contains("err")) {
    document.querySelectorAll(".err").forEach((item) => {
      item.classList.remove("err");
    });
  }
});

subscr(".header__search_button", ".header__search_form");
subscr(".subscribe__suerch_button", ".subscribe__suerch_form");
subscr(".lastblock__buttonz", ".lastblock__suerch_form");
