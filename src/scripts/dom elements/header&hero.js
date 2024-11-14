import { headerArray, heroIMGsrc } from '../../assets/assets';

const header = document
  .querySelector('#app')
  .appendChild(document.createElement('header'));

const logo = header.appendChild(document.createElement('a'));
logo.href = '#';
const logoImg = logo.appendChild(document.createElement('img'));

const navbar = header.appendChild(document.createElement('nav'));

const categories = navbar.appendChild(document.createElement('ul'));

const options = navbar.appendChild(document.createElement('ul'));

for (let i = 0; i < headerArray.length; i++) {
  const asset = headerArray[i];

  if (i === 0) {
    logoImg.src = asset;
    logoImg.alt = 'JD logo';
  } else if (i > 0 && i < 5) {
    const category = categories.appendChild(document.createElement('li'));
    const categoryA = category.appendChild(document.createElement('a'));
    categoryA.href = '#';
    categoryA.innerText = asset;
  } else {
    const option = options.appendChild(document.createElement('li'));
    const optionA = option.appendChild(document.createElement('a'));
    optionA.href = '#';
    const optionIMG = optionA.appendChild(document.createElement('img'));
    optionIMG.src = asset;
  }
}

const hero = document
  .querySelector('#app')
  .appendChild(document.createElement('div'));
hero.id = 'hero';
const heroIMG = hero.appendChild(document.createElement('img'));
heroIMG.src = heroIMGsrc;
heroIMG.alt = 'brand banner';
