class Slide {
  constructor() {
    this.body = document.body;
    this.slides = document.querySelectorAll(".slide");
    this.leftBtn = document.getElementById("left");
    this.rightBtn = document.getElementById("right");
    this.activeSlide = 0;
    this.initEventListener();
  }

  goNextImage() {
    this.activeSlide++;

    if (this.activeSlide > this.slides.length - 1) {
      this.activeSlide = 0;
    }

    this.setBgToBody();
    this.setActiveSlide();
  }
  goPreImage() {
    this.activeSlide--;

    if (this.activeSlide < 0) {
      this.activeSlide = this.slides.length - 1;
    }

    this.setBgToBody();
    this.setActiveSlide();
  }

  initEventListener() {
    this.rightBtn.addEventListener("click", () => {
      this.goNextImage();
    });

    this.leftBtn.addEventListener("click", () => {
      this.goPreImage();
    });

    document.addEventListener("keydown", (event) => {
      console.log(event);
      let key = event.key;
      if (key == "ArrowRight"){
        this.goNextImage();
      }
    });
    document.addEventListener("keydown", (event) => {
      console.log(event);
      let key = event.key;
      if (key == "ArrowLeft"){
        this.goPreImage();
      }
    });


  }

  setBgToBody() {
    this.body.style.backgroundImage =
      this.slides[this.activeSlide].style.backgroundImage;
  }

  setActiveSlide() {
    this.slides.forEach((slide) => slide.classList.remove("active"));

    this.slides[this.activeSlide].classList.add("active");
  }
}
