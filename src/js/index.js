function scrollToElement(selector) {
  var el = document.querySelector(selector);
  console.log("dbsblmçlml");

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  // const isClosed = dropDownMenu.contains("hidden");
  dropDownMenu.classList.toggle("open");

  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  // dropDownMenu.classList.toggle("hidden");
  /*   dropDownMenu.classList.toggle("block");
  isClosed
    ? dropDownMenu.classList.remove("hidden")
    : dropDownMenu.classList.toggle("hidden"); */
};
