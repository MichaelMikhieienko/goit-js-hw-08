// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </li>
        `;
    })
    .join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);

const container = document.querySelector('.gallery');
container.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a');

