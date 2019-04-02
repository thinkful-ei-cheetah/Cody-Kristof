'use strict';
/* global $,STORE */

const HANDLER = (function(){

  const  handleSubmitButton = function (){
    $('button').submit(event => {
      event.preventDefault();
      fetchingDataFromApi();
      console.log('hi');
    });
  };

  const handleFormlogic = function() {
    $('#dog-breed-checkbox').on('click', e=>{
      STORE.formType = $(e.currentTarget).prop('checked');
      renderForm();
    });
  };

  const  fetchingDataFromApi = function (){
    console.log('fetching data');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(jsonDatat => console.log('hi'))
      .catch(error => alert('Something went wrong. Try again later.'));
  };

  'use strict';
  /*global $ */

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
    fetchingDataFromApi();
  }

  return {main};

}());


