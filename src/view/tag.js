
export const createTag = (tagsName) => {
    const tag = document.createElement('span');
    tag.classList.add('font-bold', 'text-center', 'text-gray-600', 'block', 'px-[5px]', 'px-[3px]', 'bg-gray-200', 'rounded-lg', 'text-sm');
    tag.textContent = `${tagsName}`
    return tag.outerHTML;
}