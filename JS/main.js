// solve without OOP
let games = [];
let details = {};
const displayGames = document.getElementById("displayGames");
let gameCategory = document.querySelector(".navbar-expand-lg .navbar-nav ");
const gameDetailView = document.getElementById("gameDetailView");
const game = document.getElementById("game");
const home = document.getElementById("home");
const clos = document.querySelector("#game .d-flex i");
getdata("MMORPG");

gameCategory.addEventListener("click", async function (e) {
  await getdata(e.target.innerHTML);
});
async function getdata(cat) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "42f908a746mshe07f713b1b61923p1ea5e7jsn68794f19a41a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
    options
  );
  const response = await api.json();
  console.log(response);
  games = response;
  displaydata();
}

function displaydata() {
  let bag = "";
  for (const element of games) {
    bag += `<div  class="col-lg-4 col-md-6 col-xl-3 ">
        <div class="shadow text-white h-100 d-flex flex-column justify-content-between p-2 cover1 position-relative">
        <div id="${element.id}" class="idselect"></div>  
        <div  class="mb-2">
            <img src="${element.thumbnail}" class="img-fluid" alt="game photo" />
          </div>
          <div class="row">
          <h5 class="col-8">${element.title}</h5>
          <span class="free col-4 rounded-2" >free</span>
          </div>
          <p class="text-center" >${element.short_description}</p>
          <div class="d-flex justify-content-between bg-foot ">
          <span>${element.genre}</span>
          <span>${element.platform}</span>
          </div>
        </div>
      </div>`;
  }
  displayGames.innerHTML = bag;
}

displayGames.addEventListener("click", async function (e) {
  let gameId = e.target.id;
  home.classList.add("d-none");
  game.classList.remove("d-none");
  await getgameDetail(gameId);
  gameDetailView.innerHTML = `
          <div class="col-md-4">
          <div><img class="img-fluid" src="${details.thumbnail}" alt="pg" /></div>
        </div>
        <div class="col-md-8">
          <div>
            <h2>Title:${details.title}</h2>
            <h3>Category: <span>${details.genre}</span></h3>
            <h3>Platform: <span>${details.platform}</span></h3>
            <h3>Statues: <span>${details.status}</span></h3>
            <p>${details.description}</p>
            <button class="btn border-danger"><a href="${details.game_url}" class="text-white text-decoration-none">Show Game</a></button>
        </div>
        </div>`;
});

async function getgameDetail(gId) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "42f908a746mshe07f713b1b61923p1ea5e7jsn68794f19a41a",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response1 = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gId}`,
    options
  );
  const result1 = await response1.json();
  details = result1;
  console.log(result1);
}

clos.addEventListener("click", function () {
  home.classList.remove("d-none");
  game.classList.add("d-none");
});
