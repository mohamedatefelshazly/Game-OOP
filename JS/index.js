import { displayofgames, displayofdetails } from "./Ui.js";

let games = [];
let details = {};
const displayGames = document.getElementById("displayGames");
let gameCategory = document.querySelector(".navbar-expand-lg .navbar-nav ");
const gameDetailView = document.getElementById("gameDetailView");
const game = document.getElementById("game");
const home = document.getElementById("home");
const clos = document.querySelector("#game .d-flex i");
let cats = document.querySelectorAll(".nav-link");

displayGames.innerHTML = `<div class="loader"></div>`;
let res1 = new displayofgames();
res1.getdata();
cats[0].style.color = "#0099cc";

gameCategory.addEventListener("click", function (e) {
  for (const element of cats) {
    element.style.color = "#fff";
  }
  e.target.style.color = "#0099cc";
  displayGames.innerHTML = `<div class="loader"></div>`;
  let res = new displayofgames(e.target.innerHTML);
  res.getdata();
});

displayGames.addEventListener("click", async function (e) {
  let gameId = e.target.id;
  let res2 = new displayofdetails(gameId);
  res2.getgameDetail();
  home.classList.add("d-none");
  game.classList.remove("d-none");
});

clos.addEventListener("click", function () {
  home.classList.remove("d-none");
  game.classList.add("d-none");
});
