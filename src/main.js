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

    
})