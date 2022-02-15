const baseURL = 'https://api.spacexdata.com';

const searchForm = document.getElementById("search-form");

const spaceShips = document.querySelector("ul");

const shipImage = document.querySelector("")

function fetchSpace() {
    
    fetch(`${baseURL}/v4/rockets`) //grabbing the data from API
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
          document.querySelector("h1").innerText = json[0].name;
  
        displayRockets(json);
      })
      .catch((error) =>
          console.log("Error happening here at first fetch", error)

      );
  }

fetchSpace();

function displayRockets(rockets) {
    console.log("API Response :", rockets);
    
    rockets.forEach((r) => {
      let rocket = document.createElement("li");
      rocket.innerText = r.name;
      spaceShips.appendChild(rocket);
    });
  }