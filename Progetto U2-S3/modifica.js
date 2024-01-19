const myURL = 'https://striveschool-api.herokuapp.com/api/product/';
console.log(myURL);
const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDE1NjE4N2U1YzAwMTgxNGM2MjQiLCJpYXQiOjE3MDU2NTY2NjIsImV4cCI6MTcwNjg2NjI2Mn0.UXU8jZihZr-N9cQaBwVCJgM6j3r04v2r5xXB79ypbrU';

const addressSearch = new URLSearchParams(location.search);
console.log(addressSearch);
const editCard = addressSearch.get('editId');
console.log(editCard);

fetch(myURL + '/' + editCard, {
  headers: {
    Authorization: key,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((dati) => {
    console.log(dati);
    document.getElementById('title').innerText = dati.name;
    document.getElementById('testo').innerText = dati.description;
    document.getElementById('price').innerText = dati.price;
    document.getElementById('brand').innerText = dati.brand;
    document.getElementById('elimina').addEventListener('click', function () {
      fetch(myURL + '/' + editCard, {
        method: 'DELETE',
        headers: {
          Authorization: key,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .catch((err) => {});
    });
    document
      .getElementById('modifica')
      .setAttribute('href', 'backoffice.html?editId=' + dati._id);
  })

  .catch((err) => {
    console.log('ERRORE', err);
  });
