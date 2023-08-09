const brg_open = document.querySelector(".burger");
const brg_close = document.querySelector(".burger-close-btn");
const brg_menu = document.querySelector(".burger-menu");

console.log(brg_menu);

brg_open.onclick = () => {
  // if (brg_menu.style.display == "none") {
  brg_menu.style.display = "block";
  document.body.style.overflow = "hidden";
  // }
};

brg_close.onclick = () => {
  // if (brg_menu.style.display == "block") {
  brg_menu.style.display = "none";
  document.body.style.overflow = "scroll";
  // }
};

// brg_open.onclick = () => {
//   if (brg_menu.style.display == "none") {
//     brg_menu.style.display = "block";
//     document.body.style.overflow = "hidden";
//   }
// };

// brg_close.onclick = () => {
//   brg_menu.style.display = "none";
//   brg_close.style.display = "none";
// };

// const card = document.querySelector(".projects-card");
// const card_txt = document.querySelector(".projects-text-box");

// card.onmouseover = () => {
//   card_txt.style.bottom = "0";
// };

// card.onmouseout = () => {
//   card_txt.style.bottom = "-66.4px";
// };
