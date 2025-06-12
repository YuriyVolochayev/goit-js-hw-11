import axios from "axios";

const url = "https://pixabay.com/api/";
const personalKey = "50786022-8e3ff2db3776ebf2bddb784c1";

export function getImagesByQuery(query) {
    const params = {
        key: personalKey,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    };

    return axios.get(url, { params })
        .then(response => {
            if (response.data.hits.length === 0) {
                throw new Error("Sorry, there are no images matching your search query. Please try again!");
            }
            return response.data;
        });
}



