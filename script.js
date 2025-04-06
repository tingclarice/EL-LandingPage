const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navul')[0];
var active = 0;

toggleButton.addEventListener('click', classActivate);

function classActivate(){
  if (active===0){
    navbarLinks.classList.add('active');
    active += 1;
    event.preventDefault();
    console.log(active);
} else {
  navbarLinks.classList.remove('active');
  active -= 1;
  console.log(active);
}
}