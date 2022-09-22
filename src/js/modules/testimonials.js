const testomonials = document.getElementById("testapi");

async function getUsers() {
  const request = fetch("https://reqres.in/api/users?page=2");
  const response = await request;
  if (response.ok) {
    const data = await response.json();
    renderUsers(data.data);
  }
}
getUsers();

function renderUsers(users) {
  users.forEach((user) => {
    const cardMobile = document.createElement("div");
    cardMobile.className = "testimonials__card420";
    cardMobile.innerHTML = `
    <div class= 'testimonials__js' style="background-image: url('${user.avatar}')">
      </div>
      <div class="testimonials__card_description">
        Slate helps you see how many more days you need to work to reach
        your financial goal for the month and year.
      </div>
      <div class="testimonials__card_stars">
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star2.png" />
    </div>
      <div class="testimonials__card_name">${user.first_name} ${user.last_name}</div>
      <div class="designer">${user.email}</div>
    `;
    testomonials.appendChild(cardMobile);

    const card = document.createElement("div");
    card.className = "testimonials__card";
    card.innerHTML = `
      <div class= 'testimonials__js' style="background-image: url('${user.avatar}')">
      </div>
      <div class="testimonials__card_description">
        Slate helps you see how many more days you need to work to reach
        your financial goal for the month and year.
      </div>
      <div class="testimonials__card_stars">
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star1.png" />
      <img src="/img/star2.png" />
    </div>
      <div class="testimonials__card_name">${user.first_name} ${user.last_name}</div>
      <div class="designer">${user.email}</div>
    `;
    testomonials.appendChild(card);
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 576) {
    const cardMobile = document.querySelectorAll(".testimonials__card420");
    cardMobile.forEach((card, idx) => {
      if (idx > 2) {
        card.style.display = "none";
      }
    });
  }
});
