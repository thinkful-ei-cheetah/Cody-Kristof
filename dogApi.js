'use strict';
/* global $ */
const STORE = (function (){
  let items= { 
    pictures:[]
  };
  let formType =false;
  return {
    items,
    formType
  };
}());