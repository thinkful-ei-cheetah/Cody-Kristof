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
      STORE.value = '';
      renderForm();
    });
  };
  const renderImage = function(){
    $('.all-container').html(createPictureHtml());
  };
  const createPictureHtml = function(){
    let images = STORE.items.map(image => generatePicture(image));

    return images.join('');

  };
  const generatePicture = function(imageUrl){
    return `<img class='all-photo' src=${imageUrl} alt='pictue of dog'>`;
  };


  const checkEntry = function(entry){
    const removedSpaces = entry.trim();
    if (removedSpaces === '') throw Error('You need to enter a breed');
    const toCheck = removedSpaces.toLowerCase().split(' ');
  
    console.log('im here')
    if (toCheck.length === 1 ) return toCheck[0];
  
    if (toCheck.length > 2 ) throw Error('No Breeds Found');
  
    if (toCheck.join(' ') === 'german shepherd') return 'germanshepherd';
  
    return toCheck[1] + '-' + toCheck[0];
  }

  const  fetchingDataFromApi = function (){
    if (STORE.formType === true) STORE.value = checkEntry(STORE.value);
    console.log('fetching data');
    let url = STORE.formType ? `https://dog.ceo/api/breed/${STORE.value}/images/random` : 
      `https://dog.ceo/api/breeds/image/random/${STORE.value}`;

    fetch(url)
      .then(response => response.json())
      .then(addItemToStore)
      .then(renderImage)
      .catch(error => alert('Something went wrong. Try again later.'));
  };
  const addItemToStore = function(res){
    
    STORE.items.length = 0;
    if (STORE.formType === true){
      STORE.items.push(res.message);
    } else {
    STORE.items.push(...res.message);
    }
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


