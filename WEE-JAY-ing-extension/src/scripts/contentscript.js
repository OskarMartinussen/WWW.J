import * as extension from './utils/extension';
import { invertColor } from './utils/ui/color';


const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


function onRequest(message, sender, reply) {
  console.log('get a message from background.js or popup.js', message);

  if(message.action === 'invert-page-color'){
    var body = document.querySelector('body');
    body.classList.add('invert');
  }

  if(message.action === 'please-randomize-images'){
    var images = document.querySelectorAll('img');
    var body = document.querySelector('body');
    var content = document.querySelector('#content');

    for(var x =0; x < images.length; x++){
      var img = images[x];
      var width = randomNumber(100, 400);

      img.style.position = 'absolute';
      img.style.width = width +'px';
      img.style.left = randomNumber(0, window.innerWidth - width) + 'px';
      img.style.top = randomNumber(0, content.offsetHeight) + 'px';
      img.style.zIndex = 999999;
      img.style.height = 'auto';

      body.appendChild(img);
    }
  }

}


window.onload = () => {
  console.log('extension is loaded');
  // everycode here will be excuted on page load no matter if there is a message or not
};

extension.onMessage(onRequest);