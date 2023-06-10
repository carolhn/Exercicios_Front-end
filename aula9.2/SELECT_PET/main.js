const getDog =  document.querySelector("#random-dog");
const getCat = document.querySelector('#random-cat');
const getAll = document.querySelector('#surprise-me');
const petImage = document.querySelector("#random-pet-image");

const URL_DOG = 'https://dog.ceo/api/breeds/image/random';
const URL_CAT = 'https://api.thecatapi.com/v1/images/search';

getDog.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(URL_DOG)
        .then(response => response.json())
        .then((data) => {
            petImage.src = data.message;
        })
        .catch(error => console.log(error.message));
});

getCat.addEventListener('click', (event) => {
    event.preventDefault();
    fetch(URL_CAT)
        .then(response => response.json())
        .then((data) => {
            petImage.src = data[0].url;
        })
        .catch(error => console.log(error.message));
});

getAll.addEventListener("click", () => {
    Promise.any([
      fetch(URL_CAT).then((res) => res.json()),
      fetch(URL_DOG).then((res) => res.json()),
    ])
      .then((data) => {
        let petURL;
        if (Array.isArray(data)) {
          // Imagem de gato
          petURL = data[0]?.url;
        } else if (data?.status === "success") {
          // Imagem de cachorro
          petURL = data?.message;
        }
        if (petURL) {
          petImage.src = petURL;
        } else {
          console.error("Nenhuma imagem encontrada.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
  