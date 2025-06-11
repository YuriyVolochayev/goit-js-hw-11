import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "50786022-8e3ff2db3776ebf2bddb784c1";




export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    };

    return axios.get(BASE_URL, { params })
        .then(response => {
            if (response.data.hits.length === 0) {
                throw new Error("Sorry, there are no images matching your search query. Please try again!");
            }
            return response.data;
        });
}



