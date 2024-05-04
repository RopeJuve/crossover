import { createTag } from "./tag.js";
import { createStar } from "./stars.js";

export const createCard = ({ _id, name, tags, rating, location, image_URL, reviews }) => {
    return `
    <div id='${_id}' class="bg-[#2c3c58] rounded-lg shadow-md p-4 flex gap-[1rem] cursor-pointer mb-[1.5rem]">
    <img class='w-[180px] h-[180px] rounded-lg' src='${image_URL}' />
    <div id='card-content' class='flex flex-col gap-[0.5rem] text-white'>
    <h2 class="text-xl font-bold ">${name}</h2>
        <p>Rating: ${rating} (${reviews.length} reviews)</p>
        <div id='rating-container' class=''>
        ${createStar(rating, '1rem', '1rem')}
        </div>
        <p>City: ${location.city}</p>
     
        <div class='flex items-center gap-2'>${tags.map(tag => createTag(tag)).join('')}</div>
    </div>
</div>
`;
}

