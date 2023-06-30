console.log("This is working");

let menu_icon = document.querySelector(".menu-icon");
let mobileMenu = document.querySelector(".menu-items");
let showMenu = document.querySelector(".show-menu");
console.log(menu_icon);
console.log(mobileMenu);
console.log(showMenu);

// addEventListener("click");

menu_icon.addEventListener("click", myFunction);

function myFunction() {
  // show menu from hamburger menu

  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
  }
}
