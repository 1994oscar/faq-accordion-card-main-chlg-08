'use strict';
const details = document.querySelectorAll('details');

function openDetails(e){

  const lastElement = this.lastElementChild;
  
  if (this.open) {
    lastElement.classList.remove('close-panel');
    lastElement.classList.add('active-panel'); 
  }
  else{
    lastElement.classList.remove('active-panel');
    lastElement.classList.add('close-panel');
  }

}

details.forEach(detail => {
  detail.addEventListener('toggle', openDetails);
});

