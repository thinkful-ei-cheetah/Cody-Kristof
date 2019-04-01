'use strict';

/*global pageView, $, API_CONTROLLER */

//this would be considered controller

$(function(){
  pageView.generateFormInputs();
  handlebreedCheck ();
  handleMaxClick();
  handleSubmit();
}() );

function handlebreedCheck (){
  $('form').on('click', '#dog-breed-checkbox', () =>{
    pageView.specificBreed = !pageView.specificBreed;
    pageView.generateFormInputs();
  });
}

function handleMaxClick(){
  $('form').on('click', '.js-max-btn', ()=>{
    $('#dog-count').val('50');
  });
}

function handleSubmit(){
  $('form').submit(e =>{
    e.preventDefault();
    try{
      const entry = pageView.specificBreed ?
        $('#dog-breed').val() :
        $('#dog-count').val();
      
      const query = checkEntry(entry);
      pageView.numOrBreed = query;
      API_CONTROLLER.grabPhotos();
    } catch (e){
      console.log(e.message);
    } 
  });

}

function checkEntry(entry){
  const removedSpaces = entry.trim();
  if (removedSpaces === '') throw Error('You need to enter a breed');
  const toCheck = removedSpaces.toLowerCase().split(' ');

  if (toCheck.length === 1 ) return toCheck[0];

  if (toCheck.length > 2 ) throw Error('No Breeds Found');

  if (toCheck.join(' ') === 'german shepherd') return 'germanshepherd';

  return toCheck[1] + '-' + toCheck[0];
}