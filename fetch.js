let allCharInt = [];

for (let i = 0; i < 826; i++){
    allCharInt.push(i);
}

let allCharIntToString = allCharInt.join(',');

const baseURL = `https://rickandmortyapi.com/api/character/${allCharIntToString}`;
console.log(baseURL);

const characterNameHeader = document.getElementById("character-name");
const characterNameSpecies = document.getElementById("character-species");
const characterImage = document.getElementById("character-image");
const selectNameDropDown = document.getElementById("selector");
const characterNameStatus = document.getElementById("character-status")

fetchCharacters();

function fetchCharacters() {
    fetch(baseURL)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            populateDropdown(json);
            displayName(json);
            displaySpecies(json);
            displayStatus(json)
            displayImage(json);
        })
        .catch((error) =>
            console.log("Error.", error)
    );
};

function displayName(json) {
    characterNameHeader.innerText = json[0].name;
};

function displaySpecies(json) {
    characterNameSpecies.innerText = "Species: " + json[0].species;
};

function displayStatus(json) {
    characterNameStatus.innerText = "Status: " + json[0].status;
};

function displayImage(json) {
    let image = `<img src="${json[0].image}"></img>`;
    characterImage.innerHTML = image;
};

//overrides

function displayName(json, i) {
    characterNameHeader.innerText = json[i].name;
};

function displaySpecies(json, i) {
    characterNameSpecies.innerText = "Species: " + json[i].species;
};

function displayStatus(json, i) {
    characterNameStatus.innerText = "Status: " + json[i].status;
};

function displayImage(json, i) {
    let image = `<img class="card-img-top" src="${json[i].image}"></img>`;
    characterImage.innerHTML = image;
};

//populate dropdown
function populateDropdown(json) {
    for(let i = 0; i < json.length; i++) {
        let opt = json[i].name;
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = json[i].id;
        selectNameDropDown.appendChild(el);
    }
}

selectNameDropDown.addEventListener('change', function() {
    fetch(baseURL)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json, this.value-1);
            populateDropdown(json);
            displayName(json, this.value-1);
            displaySpecies(json, this.value-1);
            displayStatus(json, this.value-1)
            displayImage(json, this.value-1);
        })
        .catch((error) =>
            console.log("Error.", error)
    );
  })