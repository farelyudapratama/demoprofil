toggle = document.querySelector(".togel");
nav = document.querySelector(".navbar-list");

toggle.onclick = function() {
  nav.classList.toggle("active");
}
toggle.addEventListener("change", function() {
  if (this.checked) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

document.addEventListener("click", function(event) {
  const isClickInsideNavbar = nav.contains(event.target);
  const isClickInsideToggle = toggle.contains(event.target);
  
  if (!isClickInsideNavbar && !isClickInsideToggle) {
    nav.classList.remove("active");
    toggle.checked = false;
  }
});

nav.querySelectorAll("li").forEach(function(item) {
  item.addEventListener("click", function() {
    nav.classList.remove("active");
    toggle.checked = false;
  });
});

window.addEventListener("scroll", function() {
  nav.classList.remove("active");
  toggle.checked = false;
});
