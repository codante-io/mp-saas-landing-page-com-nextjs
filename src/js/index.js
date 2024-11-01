function scrollToElement(selector) {
  var el = document.querySelector(selector);

  const body = document.body;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  const isOpenMenu = body.classList.contains("overflow-hidden");

  if (isOpenMenu) {
    body.classList.remove("overflow-hidden");
  }

  /*   dropDownMenu.classList.remove("open");
  toggleBtnIcon.classList = "fa-solid fa-bars"; */
}

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");
const coverSection = document.querySelector(".cover");
const body = document.body;

function toogleDropDown() {
  // const isClosed = dropDownMenu.contains("hidden");
  dropDownMenu.classList.toggle("open");
  coverSection.classList.toggle("animate-blur");

  const isOpen = dropDownMenu.classList.contains("open");
  body.classList.toggle("overflow-hidden");
  toggleBtn.classList.toggle("hidden");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
