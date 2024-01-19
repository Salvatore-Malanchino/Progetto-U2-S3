//URL AND KEY//
const myURL = 'https://striveschool-api.herokuapp.com/api/product/';
const key =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDE1NjE4N2U1YzAwMTgxNGM2MjQiLCJpYXQiOjE3MDU2NTY2NjIsImV4cCI6MTcwNjg2NjI2Mn0.UXU8jZihZr-N9cQaBwVCJgM6j3r04v2r5xXB79ypbrU';

//--------------ELEMENTI DELLA PAGINA ---------------//
const nameElement = document.getElementById('name');
const descriptionElement = document.getElementById('description');
const brandElement = document.getElementById('brand');
const imgElement = document.getElementById('img');
const priceElement = document.getElementById('price');
const formElement = document.getElementById('form-element');

//----------------------------------------------------//
//-------------EDIT-------------------//
//--------------------------------------------//
const addressSearch = new URLSearchParams(location.search);
console.log(addressSearch);
const editCard = addressSearch.get('editId');
console.log(editCard);
if (editCard) {
  document.getElementById('h1-title').innerText = 'MODIFICA IL TUO ELEMENTO';
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
    .then((guitar) => {
      nameElement.value = guitar.name;
      descriptionElement.value = guitar.description;
      brandElement.value = guitar.brand;
      imgElement.value = guitar.imageUrl;
      priceElement.value = guitar.price;
    })
    .catch((err) => {});
  //----------------------------------------------------//
  //-------------EDIT-------------------//
  //--------------------------------------------//
}
formElement.addEventListener('submit', function (e) {
  e.preventDefault();
  const createGuitar = {
    name: nameElement.value,
    description: descriptionElement.value,
    brand: brandElement.value,
    imageUrl: imgElement.value,
    price: priceElement.value,
  };
  console.log('INVIO DATI', createGuitar);
  fetch(myURL, {
    method: 'POST',
    headers: {
      Authorization: key,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(createGuitar),
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        alert('ok');
      } else {
        alert('PROBLEMA');
      }
      console.log('response', response);
    })

    .catch((err) => {
      alert('errore');
      console.log('ERRORE', err);
    });
});
