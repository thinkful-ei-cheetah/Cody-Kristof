'use strict';
/*global pageView*/

const API_CONTROLLER = (function (){

  function whichAPI(numOrBreed){
    return pageView.specificBreed ? 
      `https://dog.ceo/api/breed/${numOrBreed}/images/random` :
      `https://dog.ceo/api/breeds/image/random/${numOrBreed}`;
  }
  
  function grabPhotos(){
    fetch(whichAPI(pageView.numOrBreed))
      .then(response => response.json())
      .then(responseJson => addItemsToStateAndRender(responseJson))
      .catch (e => console.log(e.message) );
  }
  
  function addItemsToStateAndRender(pictureObj){

    //clear out current pictures and add new ones
    pageView.pictures.length = 0;
    if (pageView.specificBreed === true){ pageView.pictures.push(pictureObj.message);
    } else if (pageView.specificBreed === false){
      pageView.pictures.push(...pictureObj.message);
    }
    pageView.renderPictureView();
  }

  return {
    grabPhotos,
  };
}() );

