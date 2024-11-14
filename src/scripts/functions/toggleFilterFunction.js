import { filters } from '../../assets/assets';

const filterButton = document.querySelector('#shop div button');

const filtersDiv = document.querySelector('#shopfilters');

const navFilterButton = document.querySelector('nav img:first-of-type');

filtersDiv.classList = 'invisible';
const toggleFilters = () => {
  if (filtersDiv.classList.contains('visible')) {
    filtersDiv.classList.remove('visible');
    filtersDiv.classList.add('invisible');

    setTimeout(() => {
      filterButton.style.top = '0';
      filterButton.style.transform = 'rotate(0deg)';
      filtersDiv.style.opacity = 0;
      filtersDiv.style.paddingBottom = '14px';
      navFilterButton.src = '/src/assets/assetIMGs/navBar/filterIcon.png';
    }, 250);
  } else {
    filtersDiv.classList.remove('invisible');
    filtersDiv.classList.add('visible');

    setTimeout(() => {
      filterButton.style.top = '217px';
      filterButton.style.transform = 'rotate(180deg';
      filtersDiv.style.opacity = 1;
      filtersDiv.style.paddingBottom = '40px';
      filterButton.className = 'mobile-display';

      navFilterButton.src =
        '/src/assets/assetIMGs/navBar/filterIconOnClick.png';
    }, 250);
  }
};

filterButton.addEventListener('click', toggleFilters);

navFilterButton.addEventListener('click', toggleFilters);
