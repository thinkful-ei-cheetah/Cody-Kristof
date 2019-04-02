'use strict';
/* global $ */

const handlers = (function(){

  const  handleSubmitButton = function (){
    console.log('submit button');
  };

  const  handleFormlogic = function (){
    console.log('form stuff');
  };

  const  fetchingDataFromApi = function (){
    console.log('fetching data');
  };

  return handleSubmitButton, handleFormlogic, fetchingDataFromApi;

});

