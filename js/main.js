const productsListEl = document.querySelector('#products-list');

// Function for creating element
function createElement(elName, className, textContent) {
    const createdEl = document.createElement(elName);
    createdEl.className = className;

    if(textContent) {
        createdEl.textContent = textContent;
    }

    return createdEl;
}

// Function for get elemets insided
function appendEl(appendingEl, appender) {
    appendingEl.appendChild(appender);
}

// Function for creating product card
function createCard(product) {
    const {id, title, img, price, model, addedDate} = product;

    let productAddedDate = addedDate.split('T')[0]; 
    let correctDateArr = productAddedDate.split('-');
    let correctDate = `${correctDateArr[2]}.${correctDateArr[1]}.${correctDateArr[0]}`

    const productCardItemEl = createElement('li', 'col-4');
    const productCardEl = createElement('div', 'card');
    const productImgEl = createElement('img', 'card-img-top');
    const productCardContentEl = createElement('div', 'card-body');
    const productTitleEl = createElement('h3', 'card-title', title);
    const productPriceEl = createElement('p', 'card-text fw-bold');
    const productPriceMarkEl = createElement('mark', '', price/100*25);
    const productOldPriceEl = createElement('p', 'card-text');
    const productOldPriceStrokeEl = createElement('s', '', price);
    const productModelEl = createElement('p', 'badge bg-success', model);
    const productAddedDateEl = createElement('p', 'card-text', correctDate);
    const productBenefitsListEl = createElement('ul', "d-flex flex-wrap list-unstyled");

    // General Elements
    const btnsWrapperEl = createElement('div', "position-absolute top-0 end-0 d-flex");
    const btnDeleteEl = createElement('button', "btn rounded-0 btn-secondary");
    const btnDeleteIconEl = createElement('i', "fa-solid fa-trash");
    const btnEditEl = createElement('button', "btn rounded-0 btn-danger");
    const btnEditIconEl = createElement('i', "fa-solid fa-pen");


    productCardItemEl.dataset.id = id;
    productImgEl.src = img;
    product.benefits.forEach(benefit => {
        const productBenefitEl = createElement('li', "badge bg-primary me-1 mb-1", benefit);
        appendEl(productBenefitsListEl, productBenefitEl)
    })

    appendEl(productCardItemEl, productCardEl);
    appendEl(productCardEl, productImgEl);
    appendEl(productCardEl, productCardContentEl);
    appendEl(productCardContentEl, productTitleEl);
    appendEl(productCardContentEl, productPriceEl);
    appendEl(productPriceEl, productPriceMarkEl);
    appendEl(productCardContentEl, productOldPriceEl);
    appendEl(productOldPriceEl, productOldPriceStrokeEl);
    appendEl(productCardContentEl, productModelEl);
    appendEl(productCardContentEl, productAddedDateEl);
    appendEl(productCardContentEl, productBenefitsListEl);
    appendEl(productCardContentEl, btnsWrapperEl);
    appendEl(btnDeleteEl, btnDeleteIconEl);
    appendEl(btnEditEl, btnEditIconEl);
    appendEl(btnsWrapperEl, btnEditEl);
    appendEl(btnsWrapperEl, btnDeleteEl);

    return productCardItemEl;
}

products.forEach(product => {
    const productEl = createCard(product);

    appendEl(productsListEl, productEl);
})

const productsCountEl = document.querySelector('.products-count');
productsCountEl.textContent = products.length;