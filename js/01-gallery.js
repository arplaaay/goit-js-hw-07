import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

function makeGalleryPhotosMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `
        <a class="gallery__link" href="#">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>`;
		})
		.join("");
}

galleryContainer.insertAdjacentHTML("afterbegin", makeGalleryPhotosMarkup(galleryItems));

galleryContainer.addEventListener("click", onPhotoClick);

function onPhotoClick(evt) {
	evt.preventDefault();

	if (evt.target.nodeName !== "IMG") {
		return;
	}

	const containerImgEl = document.querySelector(".gallery__image");

	const instance = basicLightbox.create(`<img src="${containerImgEl.dataset.source}"/>`, {
		onShow: instance => {
      window.addEventListener("keydown", onShowModal);
    },
    
    onClose: instance => {
      window.removeEventListener("keydown", onShowModal);
    }
	});

	function onShowModal(evt) {
		if (evt.code === "Escape") {
			instance.close();
    }
  };

	instance.show();
}
