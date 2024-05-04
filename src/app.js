import { getData, getRestaurant } from "./data/getData.js";
import { createCard } from "./view/card.js";
import { restaurantModal } from "./view/restaurantModal.js";

const restaurantsContainer = document.querySelector('#restaurants-container');

const { data } = await getData();


console.log(data);
restaurantsContainer.classList.add('p-[1.5rem]', 'mt-[2rem]', 'grid', 'max-w-[920px]', 'md:mx-[auto]', 'lg:p-0');
restaurantsContainer.innerHTML = data.map(restaurant => {
    return createCard(restaurant);
}).join('');

document.addEventListener('click', async (e) => {
    const { data } = await getRestaurant(e.target.id);
    const modal = restaurantModal(data);
    document.body.appendChild(modal);

});

document.addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        console.log('modal clicked');
        e.target.remove();
    }
});