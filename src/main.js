import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

//знаходжу необхідне

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

// додаю слухача подій на форму

form.addEventListener("submit", event => {
    event.preventDefault();

    //зберігаю введені дані в окрему змінну

    const query = event.target.elements["search-text"].value.trim();
    
    // перевіряю на порожній запит

    if (!query) {
        iziToast.warning({
            title: "warning",
            message: "Please enter a search term",
            position: "topRight"
        });
        return;
    }
    // прибираю попередні результати+показую індикатор завантаження. Викликаю імпортовані функції
    
    clearGallery();
    showLoader();

    getImagesByQuery(query)

        .then(data => {
            const { hits } = data;

            if (hits.length === 0) {
                iziToast.info({
                    title: "Info",
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
            } else {
                createGallery(hits);
            }
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "Something went wrong. Please try again later.",
                position: "topRight"
            });
        })
        .finally(() => {
            hideLoader();
        });

});