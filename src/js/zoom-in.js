// Big image
let   divImage = document.createElement('div'),
slider = document.querySelector('.slider'),
bigImgLink = document.querySelectorAll('.big_img_link'),
bigImage = document.createElement('Img'),
image = document.querySelectorAll('.image');

divImage.classList.add('popup');
slider.appendChild(divImage);
divImage.style.justifyContent = 'center';
divImage.style.display = 'none';
divImage.style.alignItems = 'center';
divImage.appendChild(bigImage);

image.forEach((item, i) => {
item.addEventListener('click', () => {
    bigImgLink.forEach((item, a) => {
        if (i == a) {
            bigImage.setAttribute('src', item.href);
        }
    });
});
});

slider.addEventListener('click', function(e) {
e.preventDefault();
let target = e.target;
if (target && target.classList.contains('image')) {
    divImage.style.display = 'flex';
}
if (target && target.matches('div.popup')) {
    divImage.style.display = 'none';
}
});