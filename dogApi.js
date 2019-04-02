'use strict';
/* global $ */
const STORE = (function (){
  let items= [];
  let formType =false;
  let value = '';
  return {
    items,
    formType
  };
}());