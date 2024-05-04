import { createStar } from "./stars.js";

export const restaurantModal = ({ image_URL, name, reviews, location, rating }) => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-[100vh]', 'bg-white', 'bg-opacity-40');
  modal.innerHTML = `
    <div class='relative bg-[#2c3c58] mt-[4rem] rounded-lg  p-4 max-w-[90%] mx-[auto] overflow-hidden h-[60%]'>
        <img class='absolute  top-0 left-0 w-[100%] h-[40vh] object-fill'  src='${image_URL}' />
        <div class='absolute z-10 top-[10rem] left-[2rem] flex flex-col gap-[1rem]'>
            <h2 class="text-5xl font-extrabold text-[#2c3c58]">${name}</h2>
              ${createStar(rating, '2rem', '2rem')}
            <p class='text-[#2c3c58]'>${rating} (${reviews.length} recommended reviews)</p>
        </div>
        <div class='m-t-[5rem] absolute z-10 top-[25rem] left-[2rem] flex gap-4 items-center'>
           <div class ='w-[80px] h-[80px] bg-[#0f172a] rounded-full flex items-center justify-center text-white font-bold'>
            ${reviews[0].user_id}
          </div>
          <p class='text-white'>${reviews[0].text}</p>
    </div>
    `;

  return modal;
}