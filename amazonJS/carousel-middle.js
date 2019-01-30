import { qs , getAjax } from './util.js'

class Carousel_middle {
  constructor(elObj, urlObj, optionObj) {
    this.container = qs(elObj.container)
    this.right = qs(elObj.rightBtn);
    this.left = qs(elObj.leftBtn);
    this.jsonUrl = urlObj.jsonUrl;
    this.length = optionObj.movingLength;
    this.time = optionObj.movingTime;
    this.transitioning = optionObj.transitioning;
    this.playBool = false;
    this.isMouseOver = false;
    this.init();
  }

  init() {
    getAjax(this.handler.bind(this), this.jsonUrl);
    // this.checkAuto();
    // this.carouselAuto();
  }

  handler(parsedObj) {
    const imgUrlArr = parsedObj.backgroundUrl;
    const linkUrlArr = parsedObj.linkArr;
    this.parsedArr = imgUrlArr.map(v => v);
    this.linkUrlArr = linkUrlArr.map(v => v);
    this.right.addEventListener("click", this.moveRight.bind(this));
    this.left.addEventListener("click", this.moveLeft.bind(this));
  }

  moveAuto() {
    if (this.isMouseOver) return;
    this.playBool = true;
    this.parsedArr.push(this.parsedArr.shift());
    this.container.style.transform = `translateX(-${this.length})`;
    this.container.addEventListener(
      "transitionend",
      this.shuffleArr.bind(this)
    );
    this.container.style.transition = `${this.transitioning} ${this.time}`;
  }

  moveRight() {
    if (this.playBool) return;
    this.playBool = true;
    this.parsedArr.push(this.parsedArr.shift());
    this.container.style.transform = `translateX(-${this.length})`;
    this.container.addEventListener(
      "transitionend",
      this.shuffleArr.bind(this)
    );
    this.container.style.transition = `${this.transitioning} ${this.time}`;
  }

  moveLeft() {
    //왼쪽으로 움직이는 부분 
    if (this.playBool) return;
    this.playBool = true;
    this.parsedArr.unshift(this.parsedArr.pop());
    //shifting
    this.container.style.transform = "translateX(230px)";
    this.container.addEventListener(
      "transitionend",
      this.shuffleArr.bind(this)
    );
    this.container.style.transition = "all 0.1s";
  }

  shuffleArr() {
    this.parsedArr.forEach((v, i) => {
      const part = this.module.qs(`.index${i}`);
      part.style = `background-image:url(${v})`;
    });
    this.container.style.transition = "all 0s";
    this.container.style.transform = "translateX(0px)";
    this.playBool = false;
  }

  checkAuto() {
    const middleBodyCarousel = document.querySelector('.middle-body-carousel');
    middleBodyCarousel.addEventListener('mouseover', this.mouseOver.bind(this));
    middleBodyCarousel.addEventListener('mouseout', this.mouseOut.bind(this));
  }

  mouseOver() {
    this.isMouseOver = true;
  }

  mouseOut() {
    this.isMouseOver = false;
  }

  carouselAuto() {
    setInterval(this.moveAuto.bind(this), 3000);
  }
}

export { Carousel_middle };
