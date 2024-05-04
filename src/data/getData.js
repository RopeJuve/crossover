

export const getData = async () => {
    try {
        const response = await fetch('https://yelp-restaurants-orpin.vercel.app/api/restaurants/');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching data', error);
    };
}

export const getRestaurant = async (id) => {
    try {
        const response = await fetch(`https://yelp-restaurants-orpin.vercel.app/api/restaurants/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching data', error);
    };
}