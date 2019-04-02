'use strict';
/* global $ */

const HANDLER = (function(){

  const  handleSubmitButton = function (){
    $('button').submit(event => {
      event.preventDefault();
      fetchingDataFromApi();
      console.log('hi');
    });
  };
  const  handleFormlogic = function (){
    console.log('form stuff');
  };

  const  fetchingDataFromApi = function (){
    console.log('fetching data');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(jsonDatat => console.log('hi'))
      .catch(error => alert('Something went wrong. Try again later.'));
  };
  function main(){
    handleSubmitButton();
    handleFormlogic();
    fetchingDataFromApi();
  }

  return {main};

}());


