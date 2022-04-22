import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function makeGalleryPhotosMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" title="${description}" />
        </a>`
    }).join("");
}

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryPhotosMarkup(galleryItems));

galleryContainer.addEventListener("click", onPhotoClick);

function onPhotoClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox(".gallery a", {
        captionDelay: 250
    });
    
}
