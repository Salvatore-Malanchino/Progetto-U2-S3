//URL AND KEY//
const myURL = 'https://striveschool-api.herokuapp.com/api/product/';
const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDE1NjE4N2U1YzAwMTgxNGM2MjQiLCJpYXQiOjE3MDU2NTY2NjIsImV4cCI6MTcwNjg2NjI2Mn0.UXU8jZihZr-N9cQaBwVCJgM6j3r04v2r5xXB79ypbrU';
const imgKey = 'ZXAsFbfFITZZXd4bnXQBR9SyGKnyEBfkHraPJmVuIxdka3n1cDGeqNC8';
const queryURL = 'https://api.pexels.com/v1/search?query=guitar';

//--------------------------------------------//
//--------------------------------------------//
//GENERATORE CARD//
//--------------------------------------------//
//--------------------------------------------//
const generator = function (guitarCollection) {
  guitarCollection.forEach((guitar) => {
    const newCol = document.createElement('div');
    newCol.classList.add('col');
    newCol.innerHTML = `<div class="card" ">
    
    <div class="card-body">
      <h5 class="card-title">${guitar.name}</h5>
      <p class="card-text">${guitar.description}</p>
      <h3  class="card-text">${guitar.brand}</h3>
      </div>
      <img src="https://img.freepik.com/free-vector/hand-drawn-guitar-drawing-illustration_23-2150997533.jpg?size=626&ext=jpg&ga=GA1.1.1821218512.1705670311&semt=sph" class="card-img-top" alt="guitar">
      <a href="#" class="btn btn-primary"><i class="bi bi-cart-plus"></i>${guitar.price}€</a>
      <a href="./modifica.html?editId=${guitar._id}" class="btn btn-warning">Dettagli</a>
      
      

  </div>`;
    const row = document.getElementById('guitar-row');
    console.log('sono la row', row);
    row.appendChild(newCol);
  });
};

//----------------------------------------------------//
//----------------------------------------------------//
//GENERATORE FOTO//
//----------------------------------------------------//
//----------------------------------------------------//
//const imgGenerator = function () {
// fetch(queryURL, {
//   headers: {
//     Authorization: imgKey,
//   },
// })
//   .then((risposta) => {
//     console.log('img', risposta);
//     if (risposta.ok) {
//       return risposta.json();
//     } else {
//       if (risposta.status === 404) {
//         throw new Error('404 - Pagina non trovata');
//       } else if (risposta.status === 500) {
//         throw new Error('500 - Internal server error');
//       } else {
//         throw new Error('Errore generico');
//       }
//     }
//   })
//   .then((dati) => {
//     console.log('imgDati', dati);
//     generator(dati);
//   })
//   .catch((err) => {});
//};
//imgGenerator();
//----------------------------------------------------//
//----------------------------------------------------//
//----------------------------------------------------//
//----------------------------------------------------//
//----------------------------------------------------//
const guitarGenerator = function () {
  fetch(myURL, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      console.log('guitar', response);
      if (response.ok) {
        return response.json();
      } else {
        if (response.status === 404) {
          throw new Error('404 - Pagina non trovata');
        } else if (response.status === 500) {
          throw new Error('500 - Internal server error');
        } else {
          throw new Error('Errore generico');
        }
      }
    })
    .then((data) => {
      console.log(data);
      generator(data);
    })
    .catch((err) => {});
};
guitarGenerator();
