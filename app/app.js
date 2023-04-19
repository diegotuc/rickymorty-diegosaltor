const $container = document.getElementById("container-personajes")


const URL_API = "https://rickandmortyapi.com/api/character";


fetch(URL_API)
.then ((response) => response.json())
.then ((data) => {
    const characters = data.results;
     console.log(characters)

     for (let character of characters) {
      $container.innerHTML += `
      <div class="card">
      <img class="character-image" src=${character.image} alt="Imagen de ${character.name}">
      <div class="character-info">
      <h3 class="character-name">${character.name}</h3>
      <p class="parrafo-personajes">Gender: ${character.gender}</p>
      <p class="parrafo-personajes">Species: ${character.species}</p>
      <p class="parrafo-personajes">Status: ${character.status}</p>
      </div>
      </div>
      `}
    })

