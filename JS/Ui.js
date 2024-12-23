export class displayofgames {
  constructor(cat = "MMORPG", idgames = "displayGames") {
    this.cat = cat;
    this.idgames = idgames;
  }
  async getdata() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "42f908a746mshe07f713b1b61923p1ea5e7jsn68794f19a41a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.cat}`,
      options
    );
    const response = await api.json();
    console.log(response);
    document.getElementById(this.idgames).innerHTML = response
      .map((element) => {
        return `<div  class="col-lg-4 col-md-6 col-xl-3 ">
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
      })
      .join("");
  }
}

export class displayofdetails {
  constructor(gId, iddetail = "gameDetailView") {
    this.gId = gId;
    this.iddetail = iddetail;
  }
  async getgameDetail() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "42f908a746mshe07f713b1b61923p1ea5e7jsn68794f19a41a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const response1 = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gId}`,
      options
    );
    const details = await response1.json();
    document.getElementById(this.iddetail).innerHTML = `
          <div class="col-md-4">
          <div><img class="img-fluid" src="${details.thumbnail}" alt="pg" /></div>
        </div>
        <div class="col-md-8">
          <div>
            <h2>Title: ${details.title}</h2>
            <h5>Category: <span class="dspan rounded-2 px-2 ">${details.genre}</span></h5>
            <h5>Platform: <span class="dspan rounded-2 px-2 ">${details.platform}</span></h5>
            <h5>Statues: <span class="dspan rounded-2 px-2 ">${details.status}</span></h5>
            <p class="fs-10 fw-light">${details.description}</p>
            <button class="btn border-warning"><a href="${details.game_url}" class="text-white text-decoration-none">Show Game</a></button>
        </div>
        </div>`;
  }
}
