function scrollToElement(selector) {
  var el = document.querySelector(selector);
  console.log("dbsblmçlml");

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  dropDownMenu.classList.remove("open");
  toggleBtnIcon.classList = "fa-solid fa-bars";
}

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  // const isClosed = dropDownMenu.contains("hidden");
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
