import { footerElements } from '../../assets/assets';

const footer = document
  .querySelector('#app')
  .appendChild(document.createElement('footer'));
const footerNav = footer.appendChild(document.createElement('nav'));
for (let i = 0; i < footerElements.length; i++) {
  const section = footerElements[i];
  const sectionDiv = footerNav.appendChild(document.createElement('section'));

  const sectionTitle = sectionDiv.appendChild(document.createElement('a'));
  const sectionTitleText = sectionTitle.appendChild(
    document.createElement('h6')
  );
  sectionTitleText.innerText = section.title;
  sectionTitle.href = '#';

  const sectionUl = sectionDiv.appendChild(document.createElement('ul'));

  for (let j = 0; j < section.links.length; j++) {
    const sectionLink = section.links[j];
    const sectionLi = sectionUl.appendChild(document.createElement('li'));
    const liText = sectionLi.appendChild(document.createElement('a'));
    liText.innerText = sectionLink;
    liText.href = '#';
  }
}
