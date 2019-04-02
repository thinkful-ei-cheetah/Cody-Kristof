'use strict';
/* global $,STORE */

const HANDLER = (function(){

  const  handleSubmitButton = function (){
    $('form').submit(event => {
      event.preventDefault();
      try {
        captureValues();

      } catch (e){
        console.error(e.message);
      }
      
      fetchingDataFromApi();
      console.log('hi');
    });
  };

  const captureValues = function(){
    let value;
    value = STORE.formType ? $('#breed-select').val() :
      $('#dog-count').val();
    
    if (value.trim() === '') throw new Error('Please fill out the form');
    STORE.value = value;

  };

  

  const handleFormlogic = function() {
    $('#dog-breed-checkbox').on('click', e=>{
      STORE.formType = $(e.currentTarget).prop('checked');
      renderForm();
    });
  };
  const renderImage = function(){
    console.log(createPictureHtml());
    $('.all-container').html(createPictureHtml());
  };
  const createPictureHtml = function(){
    let images = STORE.items.map(image => generatePicture(image));

    return images.join('');

  };
  const generatePicture = function(imageUrl){
    return `<img class='all-photo' src=${imageUrl} alt='pictue of dog'>`;
  };
  const  fetchingDataFromApi = function (){
    console.log('fetching data');
    let url = `https://dog.ceo/api/breeds/image/random/${STORE.value}`;
    fetch(url)
      .then(response => response.json())
      .then(addItemToStore)
      .then(renderImage)
      .catch(error => alert('Something went wrong. Try again later.'));
  };
  const addItemToStore = function(array){
    STORE.items.length = 0;
    STORE.items.push(...array.message);
  };
  

  const generateBreedForm = function(){
    return `<label for="breed-select">What breed would you like a picture of?</label>
 <br>
 <br>
 <input type="text" id="breed-select" placeholder="Husky" name="breed-select">`;
  };

  const generateAllForm = function(){
    return `<label for="dog-count">How many pictures would you like?</label>
  <br>
  <br>
  <input type="number" min="0" max="50" id="dog-count" value="3">`;
  };

  function renderForm(){
    $('.form-type').html(`${STORE.formType ? generateBreedForm() : generateAllForm()}`);
  }

  function main(){
    handleSubmitButton();
    handleFormlogic();
    renderForm();

  }

  return {main};

}());


