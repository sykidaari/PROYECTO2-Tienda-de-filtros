const brands = document.querySelectorAll('#brands input');
const allBrands = document.querySelector('#allBrands');

const invalidPriceRangeMessage = document
  .querySelector('#shopfilters div:nth-of-type(2)')
  .appendChild(document.createElement('p'));
invalidPriceRangeMessage.innerText =
  'Por favor, inserte un rango de precio válido.';
invalidPriceRangeMessage.style.display = 'none';

const noProductsFoundDiv = document
  .querySelector('#shop')
  .appendChild(document.createElement('div'));
const noProductsFoundText = noProductsFoundDiv.appendChild(
  document.createElement('p')
);
noProductsFoundText.innerText =
  '¡Lo sentimos! No tenemos productos disponibles que coincidan con los filtros seleccionados.';
noProductsFoundDiv.style.display = 'none';

allBrands.checked = true;
const allBrandstoBrands = () => {
  let allUnchecked = true;
  for (let i = 0; i < brands.length; i++) {
    if (brands[i].checked) {
      allUnchecked = false;
      break;
    }
  }
  allBrands.checked = allUnchecked;
};

const checkAllBrands = () => {
  if (allBrands.checked) {
    for (let i = 0; i < brands.length; i++) {
      brands[i].checked = false;
    }
  }
};

for (let i = 0; i < brands.length; i++) {
  brands[i].addEventListener('input', allBrandstoBrands);
}

allBrands.addEventListener('click', checkAllBrands);

const updatePriceRange = () => {
  const ranges = document.querySelectorAll('[type="range"]');
  const prices = document.querySelectorAll('[data-type="price"]');
  for (let i = 0; i < ranges.length; i++) {
    const range = ranges[i];
    const price = prices[i];

    price.innerText = range.value + '.00 €';
  }
};
const filterProducts = () => {
  const sneakers = document.querySelectorAll('.sneaker');
  const brandResults = document.querySelectorAll('.sneaker li:first-of-type');
  const priceResults = document.querySelectorAll('.sneaker li:nth-of-type(3)');

  const minPrice = parseFloat(ranges[0].value);
  const maxPrice = parseFloat(ranges[1].value);

  for (let i = 0; i < sneakers.length; i++) {
    sneakers[i].style.display = 'flex';
  }
  for (let i = 0; i < brands.length; i++) {
    const brand = brands[i];

    if (!brand.checked)
      for (let j = 0; j < brandResults.length; j++) {
        const result = brandResults[j];

        if (
          sneakers[j] &&
          brand.nextElementSibling.innerText === result.innerText
        ) {
          sneakers[j].style.display = 'none';
        }
        let allUnchecked = true;
        for (let i = 0; i < brands.length; i++) {
          if (brands[i].checked) {
            allUnchecked = false;
            break;
          }
        }
        if (allBrands.checked) {
          for (let i = 0; i < sneakers.length; i++) {
            sneakers[i].style.display = 'flex';
          }
        }
      }
  }
  for (let i = 0; i < priceResults.length; i++) {
    const resultString = priceResults[i].innerText.replace('.00 €', '');
    const result = parseFloat(resultString);

    if (result < minPrice || result > maxPrice) {
      sneakers[i].style.display = 'none';
    }
  }
  if (minPrice > maxPrice) {
    ranges[0].value = '50';
    ranges[1].value = '200';
    updatePriceRange();
    invalidPriceRangeMessage.style.display = 'block';
  } else {
    invalidPriceRangeMessage.style.display = 'none';
  }

  let allMatch = true;
  for (let i = 0; i < sneakers.length; i++) {
    const sneaker = sneakers[i];

    if (sneaker.style.display === 'flex') {
      noProductsFoundDiv.style.display = 'none';
      allMatch = false;
      break;
    }
  }
  if (allMatch) {
    noProductsFoundDiv.style.display = 'block';
  }
};

const ranges = document.querySelectorAll('[type="range"]');
for (let i = 0; i < ranges.length; i++) {
  const range = ranges[i];
  range.addEventListener('input', updatePriceRange);
}

const filterButton = document.querySelector('[data-action="filter"]');

filterButton.addEventListener('click', filterProducts);

const resetFilters = () => {
  const sneakers = document.querySelectorAll('.sneaker');
  for (let i = 0; i < sneakers.length; i++) {
    sneakers[i].style.display = 'flex';
  }
  invalidPriceRangeMessage.style.display = 'none';
  noProductsFoundDiv.style.display = 'none';
  for (let i = 0; i < brands.length; i++) {
    const brand = brands[i];
    brand.checked = false;
  }
  allBrands.checked = true;

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
};

const resetButton = document.querySelector('[data-action="Reset"]');

resetButton.addEventListener('click', resetFilters);
