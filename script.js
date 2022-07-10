const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

// unused
// if (bar) {
//   bar.addEventListener("click", () => {
//     nav.classList.add("active");
//   });
// }
// if (close){
//     close.addEventListener('click',()=>{
//         nav.classList.remove('active');
//     })
// }

// this is for navbar open and outside click close...
document.onclick = function (e) {
  if (e.target.id !== "bar" && e.target.id !== "navbar") {
    bar.classList.remove("active");
    nav.classList.remove("active");
  }
};
bar.onclick = function () {
  bar.classList.toggle("active");
  nav.classList.toggle("active");
};

// screen preloader
// screen preloader
let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});
