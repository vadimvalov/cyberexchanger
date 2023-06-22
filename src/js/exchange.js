const section = document.getElementById('mySection');
const inputs = section.getElementsByTagName('input');

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeButton = document.querySelector('#modal .close-button');

const newButton = document.getElementById('new');
const oldButton = document.getElementById('old');
const newButtonMobile = document.getElementById('newMobile');
const oldButtonMobile = document.getElementById('oldMobile');
const positiveButton = document.getElementById('positive');
const negativeButton = document.getElementById('negative');

const burgerBtn = document.getElementById('burger-btn');
const menu = document.getElementById('menu');

const inputsComments = [...document.getElementsByClassName('input-comment')];

const errorMessage = document.getElementById('error');
let rating = undefined;

const ratingHappyButton = document.getElementById('rating-happy');
const ratingAngryButton = document.getElementById('rating-angry');

/*
let elementsInsideSection = [];

elementsInsideSection.forEach((element) => {
    element.addEventListener('focus', () => {
        section.classList.add('outline-blue');
    });

    element.addEventListener('blur', () => {
        section.classList.remove('outline-blue');
    });
});
*/

function sortReviews(order) {
    let reviewsList = document.getElementById('reviews');
    let reviews = Array.from(reviewsList.children);

    // Sort comments by date
    if (order === 'newFirst') {
        reviews.sort(function (a, b) {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });
    } else {
        reviews.sort(function (a, b) {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
    }


    for (let i = 0; i < reviews.length; i++) {
        reviewsList.removeChild(reviews[i]);
    }


    // Update the comments list
    for (let i = 0; i < reviews.length; i++) {
        reviewsList.appendChild(reviews[i]);
    }
    // Call the sort function
}

function showModal() {
    modal.classList.toggle('hidden');
    modalContent.classList.toggle('scale-in-center');
}

function toggleHiddenPC() {
    newButton.classList.toggle('hidden'); // Скрыть кнопку "Сначала новые"
    oldButton.classList.toggle('hidden'); // Показать кнопку "Сначала старые"
}

function toggleHiddenMobile() {
    newButtonMobile.classList.toggle('hidden'); // Скрыть кнопку "Сначала новые" (мобильная версия)
    oldButtonMobile.classList.toggle('hidden'); // Показать кнопку "Сначала старые" (мобильная версия)
}

function toggleBorder(element) {
    element.classList.add('border-b-4');
    element.classList.add('border-b-gray');
    if (element.id === 'positive') {
        negativeButton.classList.remove('border-b-4');
        negativeButton.classList.remove('border-b-gray');
    } else {
        positiveButton.classList.remove('border-b-4');
        positiveButton.classList.remove('border-b-gray');
    }
}

function handleSubmit() {
    let termsCheckbox = document.getElementById('terms-checkbox');
    let ratingContainer = document.getElementById('rating-container');
    const errorInputs = [...modal.querySelectorAll('input:invalid')]
        .concat([...modal.querySelectorAll('textarea:invalid')]);

    errorInputs.forEach((input) => {
        input.addEventListener('keyup', () => {
            input.style.cssText = 'outline: none';
        })
    });

    termsCheckbox.addEventListener('change', () => {
        termsCheckbox.style.cssText = 'outline: none';
    });

    if (errorInputs.length === 0 && rating && termsCheckbox.checked) {
        modal.classList.toggle('hidden');
        return;
    }

    if (rating === undefined)
        errorInputs.push(ratingContainer);

    errorInputs.forEach((input) => {
        let thickness = (input !== termsCheckbox && input !== ratingContainer) ? '1.5px' : '1.5px';
        let offset = (input !== termsCheckbox) ? '0px' : '-1.9px';
        input.style.cssText = `outline: ${thickness} solid rgba(255, 0, 0, 0.75); outline-offset: ${offset};`;
    });

    errorMessage.classList.toggle('hidden');

}

function setRating(userRating) {
    rating = userRating.id;
    document.getElementById('rating-container').style.cssText = 'outline: none';
    if (userRating.id === 'rating-happy') {
        ratingHappyButton.classList.add(`bg-green-600`);
        ratingAngryButton.classList.remove(`bg-red-600`);
    } else {
        ratingAngryButton.classList.add(`bg-red-600`);
        ratingHappyButton.classList.remove(`bg-green-600`);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    positiveButton.focus(); // Установить фокус на кнопке "Сначала новые" при загрузке страницы
    positiveButton.classList.toggle('border-b-4');
    positiveButton.classList.toggle('border-b-gray');
    menu.style.cssText = `transform: scaleY(0); transform-origin: top; transition: transform 0.26s ease;`

    closeButton.addEventListener('click', function () {
        showModal();
    });

    burgerBtn.addEventListener('click', function () {
        burgerBtn.classList.toggle('active');
        if (menu.style.cssText.includes('scaleY(0)')) {
            menu.style.cssText = menu.style.cssText.replace('transform: scaleY(0);', 'transform: scaleY(1);');
        } else {
            menu.style.cssText = menu.style.cssText.replace('transform: scaleY(1);', 'transform: scaleY(0);');
        }
    });

    inputsComments.forEach((input) => {
        input.addEventListener('click', () => {
            input.parentElement.style.outline = '2px solid #00A3FF';
            const otherInputs = inputsComments.filter((inp) => inp !== input);
            otherInputs.forEach((other) => {
                other.parentElement.style.outline = 'none';
            })
        });
    })

    newButton.addEventListener('click', toggleHiddenPC);

    oldButton.addEventListener('click', toggleHiddenPC);

    newButtonMobile.addEventListener('click', toggleHiddenMobile);

    oldButtonMobile.addEventListener('click', toggleHiddenMobile);

});

/*
function sortReviews(order) {
    var reviewsList = document.getElementById('reviews');
    console.log(reviewsList);
    console.log(reviewsList.children.length);
    var reviews = Array.from(reviewsList.children);

    // Sort comments by date
    if (order === 'newFirst') {
        reviews.sort(function (a, b) {
            var dateA = new Date(a.getAttribute('data-date'));
            var dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });
    } else {
        reviews.sort(function (a, b) {
            var dateA = new Date(a.getAttribute('data-date'));
            var dateB = new Date(b.getAttribute('data-date'));
            return dateB - dateA;
        });
    }


    for (var i = 0; i < reviews.length; i++) {
        reviewsList.removeChild(reviews[i]);
    }


    // Update the comments list
    for (var i = 0; i < reviews.length; i++) {
        reviewsList.appendChild(reviews[i]);
    }
    // Call the sort function
}
*/