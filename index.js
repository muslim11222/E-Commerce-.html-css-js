const bar = document.getElementById('bar');
const close = document.getElementById('cross');
const nav = document.getElementById('navber');

if (bar) {
     bar.addEventListener('click', () => {
          nav.classList.add('action');
     })
}


if (close) {
     close.addEventListener('click', () => {
          nav.classList.remove('action');
     })
}






// Sproduct.html ja code 

const mainimage = document.getElementById('main_image');
     const smallimage = document.getElementsByClassName('small_img');


     smallimage[0]. onclick = function() {
     mainimage.src = smallimage[0].src;
     }


     smallimage[1]. onclick = function() {
     mainimage.src = smallimage[1].src;
     }


     smallimage[2]. onclick = function() {
     mainimage.src = smallimage[2].src;
     }


     smallimage[3]. onclick = function() {
     mainimage.src = smallimage[3].src;
}