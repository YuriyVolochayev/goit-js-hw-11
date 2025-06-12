// імпортую бібліотеки
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

// ініціалізую лайтбокс

const lightbox = new SimpleLightbox(".gallary a", {
    captionsData: "alt",
    captionsDelay: 250,
});

// знаходжу/звертаюсь до ДОМ елементів

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

// створюю функції яка робить розмітку (для експорту)

export function createGallery(images) {
    const markup = images.map(image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" class="image"/>
            </a>
            <div class="description">
                <p class="text">Likes <span class="span">${image.likes}</span></p>
                <p class="text">Views <span class="span">${image.views}</span></p>
                <p class="text">Comments <span class="span">${image.comments}</span></p>
                <p class="text">Downloads <span class="span">${image.downloads}</span></p>
            </div>
        </li>`
    )
        .join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}

// створюю функцію яка очищає вміст конт галереї (для експорту)
export function clearGallery() {
    gallery.innerHTML = ""; //заміняє
}

// створюю функцію, що додає клас для відображення лодера (для експорту)

export function showLoader() {
    loader.style.display = "block";
}

// створюю функцію, що прибирає клас для відображення лодера(для експорту)

export function hideLoader() {
    loader.style.display = "none";
}