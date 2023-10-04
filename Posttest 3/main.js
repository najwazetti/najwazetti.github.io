const body = document.body;
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn_icon");
const nav = document.querySelector(".navbar")



alert ("Welcome To BYREDO")

function store(value) {
  localStorage.setItem("darkmode", value);
}

function load() {
  const darkmode = localStorage.getItem("darkmode");

  if (!darkmode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (darkmode == "true") {
    
    body.classList.add("darkmode");
    nav.classList.add("darkmode");
    icon.classList.add("fa-moon");
  } else if (darkmode == "false") {
    icon.classList.add("fa-sun");
  }
}

load();

btn.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  nav.classList.toggle("darkmode");
  icon.classList.add("animated");

  store(body.classList.contains("darkmode"));

  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});
