import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems.map((item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
  </a>
  </li>`;
});

gallery.insertAdjacentHTML("afterbegin", galleryElements.join(""));

const eventModal = new SimpleLightbox(".gallery__link", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: '250',
});

