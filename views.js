'use strict';

/*global $ */
//this would be referred to as model
const pageView = (function(){
  const pictures= [];
  let specificBreed= false;
  let numOrBreed= null;

  function generatespecificBreedInput(){
    return `<br><label for="dog-breed">Which breed would you like a picture of?</label>
    <input type="text" id="dog-breed" name="dog-breed" placeholder="beagle">`;
  }
  
  function generateAllBreedInput(){
    return `<br><label for="dog-count">How many pictures would you like?</label><br>
    <input type="number" id="dog-count" name="dog-count" max="50" min="1" size="2" value="3"><input type="button" class="js-max-btn" value="Max!"><br>`;
  }
  
  function generateFormInputs(){
    const view = this.specificBreed ? generatespecificBreedInput() : generateAllBreedInput();
    renderForm(view);
  }
  
  function generateBreedView(){
    return `<div class="breed-container">
    <br>
    <img src="${pageView.pictures[0]}" alt="A photo of a ${pageView.numOrBreed}" class="breed-photo">
    </div>`;
  }
  
  function generateAllView(){
    let htmlPictureString = '';
    pageView.pictures.forEach( picture => htmlPictureString += `<img src="${picture}" alt="A photo of a dog" class="all-photo"></img>`);
  
    return `<div class="all-container">${htmlPictureString}</div>`;
  }
  
  function renderPictureView(){
    if (pageView.specificBreed){
      let toDisplay = generateBreedView();
      $('.container').html(toDisplay);
    } else if (!pageView.specificBreed){
      let toDisplay = generateAllView();
      $('.container').html(toDisplay);  
    }
  }
  
  function renderForm(viewType){
    $('.js-breedOrAll').html(viewType);
  }

  return {
    pictures,
    specificBreed,
    generateFormInputs,
    renderPictureView,
    numOrBreed,
  };
}() );




