const menuButton = document.querySelector('header button img');
const menuBackground = document.querySelector('header nav div>div');
const menuText = document.querySelector('header nav ul');
menuBackground.className = 'invisible1';
menuText.className = 'invisible1';
const showMenu = () => {
  if (menuBackground.classList.contains('visible1')) {
    menuBackground.classList.remove('visible1');
    menuBackground.classList.add('invisible1');
    menuText.classList.remove('visible1');
    menuText.classList.add('invisible1');

    setTimeout(() => {
      menuBackground.style.opacity = 0;
      menuButton.src = '/src/assets/assetIMGs/navBar/menu.png';
    }, 250);
  } else {
    menuBackground.classList.remove('invisible1');
    menuBackground.classList.add('visible1');
    menuText.classList.remove('invisible1');
    menuText.classList.add('visible1');
    setTimeout(() => {
      menuBackground.style.opacity = 1;
      menuButton.src = '/src/assets/assetIMGs/navBar/menuOnClick.png';
    }, 250);
  }
};

menuButton.addEventListener('click', showMenu);
