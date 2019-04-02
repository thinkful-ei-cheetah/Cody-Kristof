'use strict';
/* global $ */
const STORE = (function (){
  let items= [];
  let formType =false;
  let value = 0;
  return {
    items,
    formType
  };
}());