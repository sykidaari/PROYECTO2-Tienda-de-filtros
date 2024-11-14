import { filters } from '../../assets/assets';
import { sneakers } from '../../assets/assets';

const shop = document
  .querySelector('#app')
  .appendChild(document.createElement('div'));
shop.id = 'shop';

const filterToggleBar = shop.appendChild(document.createElement('div'));
const filterToggleButton = filterToggleBar.appendChild(
  document.createElement('button')
);
const filterToggleImg = filterToggleButton.appendChild(
  document.createElement('img')
);

filterToggleImg.src = '/src/assets/assetIMGs/filterarrow.png';
filterToggleImg.alt = 'Toggle filters-bar';

const shopFilters = shop.appendChild(document.createElement('div'));
shopFilters.id = 'shopfilters';
const products = shop.appendChild(document.createElement('div'));
products.id = 'sneakers';

for (let i = 0; i < filters.length; i++) {
  const filter = filters[i];
  const filterDiv = shopFilters.appendChild(document.createElement('div'));
  if (i < 2) {
    const filterName = filterDiv.appendChild(document.createElement('h6'));
    const optionsDiv = filterDiv.appendChild(document.createElement('div'));
    filterName.innerText = filter.text;
    if (i === 0) {
      const allBrandsCheckBox = filterDiv.appendChild(
        document.createElement('input')
      );
      allBrandsCheckBox.type = 'checkbox';
      allBrandsCheckBox.id = 'allBrands';

      const allBrands = filterDiv.appendChild(document.createElement('label'));
      allBrands.htmlFor = 'allBrands';
      allBrands.innerText = 'Todas las marcas';

      for (let j = 0; j < filter.options.length; j++) {
        const option = filter.options[j];
        filterDiv.id = 'brands';
        const uniqueId = 'uniqueID' + j;

        const optionTextCheckbox = optionsDiv.appendChild(
          document.createElement('input')
        );
        optionTextCheckbox.type = 'checkbox';
        optionTextCheckbox.id = uniqueId;
        const optionTextLabel = optionsDiv.appendChild(
          document.createElement('label')
        );
        optionTextLabel.htmlFor = uniqueId;
        optionTextLabel.innerText = option;
      }
    }
    if (i === 1) {
      filterDiv.id = 'prices';
      for (let j = 0; j < filter.description.length; j++) {
        const option = filter.description[j];

        const uniqueId = 'uniqueIDB' + j;

        const priceOptionDiv = optionsDiv.appendChild(
          document.createElement('div')
        );
        const range = priceOptionDiv.appendChild(
          document.createElement('input')
        );
        range.type = 'range';
        range.min = '50';
        range.max = '200';
        range.step = '1';
        range.id = uniqueId;

        const optionText = priceOptionDiv.appendChild(
          document.createElement('label')
        );
        optionText.htmlFor = uniqueId;
        optionText.innerText = option;

        const priceNumber = priceOptionDiv.appendChild(
          document.createElement('p')
        );
        priceNumber.dataset.type = 'price';

        // priceNumber.innerText = range.value + '.00 €';
      }
      const initialMinValue = document.querySelector('#uniqueIDB0');
      initialMinValue.value = '50';
      const initialMinValueText =
        document.querySelector('[for="uniqueIDB0"]').nextElementSibling;
      initialMinValueText.innerText = initialMinValue.value + '.00 €';

      const initialMaxValue = document.querySelector('#uniqueIDB1');
      initialMaxValue.value = '200';
      const initialMaxValueText =
        document.querySelector('[for="uniqueIDB1"]').nextElementSibling;
      initialMaxValueText.innerText = initialMaxValue.value + '.00 €';
    }
  }
  if (i > 1) {
    const filterName = filterDiv.appendChild(document.createElement('button'));
    filterName.innerText = filter.text;
    if (i === 2) {
      filterName.dataset.action = 'filter';
    }
    if (i === 3) {
      filterName.dataset.action = 'Reset';
    }
  }
}

sneakers.forEach((sneaker) => {
  const product = products.appendChild(document.createElement('article'));
  product.className = 'sneaker';

  const sneakerIMG = product.appendChild(document.createElement('img'));
  sneakerIMG.src = sneaker.imgSrc;

  const sneakerData = product.appendChild(document.createElement('ul'));

  const sneakerBrand = sneakerData.appendChild(document.createElement('li'));
  sneakerBrand.innerText = sneaker.brand;

  const sneakerModel = sneakerData.appendChild(document.createElement('li'));
  sneakerModel.innerText = sneaker.model;

  const sneakerPrice = sneakerData.appendChild(document.createElement('li'));
  sneakerPrice.innerText = sneaker.price + '.00 €';

  const buyButton = product.appendChild(document.createElement('button'));
  buyButton.innerText = 'Comprar';
});
