import * as extention from "./utils/extension";
import storage from "./utils/storage";



window.onload = () =>{
  var  invertBtn= document.querySelector('#invert-btn');
  var ranomImagesBtn = document.querySelector('#randomimage-btn');

  ranomImagesBtn.onclick = function (e) {
    e.preventDefault();
    console.log(e);

    var message = {
      action: 'please-randomize-images'
    };

    extention.sendMessageToContent(message);
  };

  invertBtn.onclick = function (e) {
    e.preventDefault();
    console.log(e);

    var message = {
      action: 'invert-page-color'
    };

    extention.sendMessageToContent(message);
  }


};
