class ImageContainer {
    constructor(imgSrc, parentEl, position) {
        this.imgSrc = imgSrc;
        this.parentEl = parentEl;
        this.position = position;
        // this.imgSrc = imgSrc;
        this.translateX = 0;
        // this.parentEl = parentEl;
        // this.position = position;
        this.viewPort = document.querySelector('.slider__viewport');
        this.translateNum = +this.parentEl.dataset.transform;
        this.appendImage();
        this.setDimensions();
    }
    appendImage() {
        this.el = document.createElement('div');
        this.el.classList.add('image__container');
        this.el.style.width = this.parentEl.dataset.width;
        this.parentEl.style.alignItems = this.position;
        this.image = document.createElement('img');
        this.image.src = this.imgSrc;
        this.el.appendChild(this.image);
        this.parentEl.appendChild(this.el);
    }
    setDimensions() {
        let { left, width } = this.viewPort.getBoundingClientRect();
        this.centerRef = left + (width / 2);
    }
    animate() {
        let { left, width } = this.parentEl.getBoundingClientRect();
        this.parentCenter = left + (width / 2);
        this.el.style.transform = `translateX(${(this.centerRef - this.parentCenter) * -this.translateNum}px)`;
    }
}
const images = [
    './build/assets/images/1.avif',
    './build/assets/images/2.avif',
    './build/assets/images/3.avif',
    './build/assets/images/4.avif',
    './build/assets/images/5.avif',
    './build/assets/images/6.avif',
    './build/assets/images/7.avif',
    './build/assets/images/8.avif',
    './build/assets/images/1.avif',
    './build/assets/images/2.avif',
    './build/assets/images/3.avif',
    './build/assets/images/4.avif',
    './build/assets/images/5.avif',
    './build/assets/images/6.avif',
    './build/assets/images/7.avif',
    './build/assets/images/8.avif',
];
export { ImageContainer, images };
