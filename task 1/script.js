document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
