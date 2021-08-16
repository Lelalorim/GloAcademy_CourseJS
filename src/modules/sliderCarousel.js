'use strict';

class SliderCarousel {
  constructor({
    main,
    wrap,
    parent,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.parent = document.querySelector(parent);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      widthSlide: Math.floor(100 / this.slidesToShow),
    };
    this.responsive = responsive;
  }

  init() {
    this.addNewClass();
    this.addStyle();

    if(this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if(this.responsive) {

      this.responseInit();
    }
  }

  addNewClass() {
    this.main.classList.add('js-slider');
    this.wrap.classList.add('js-slider__wrap');
    for ( const item of this.slides) {
      item.classList.add('js-slider__item');
    }
  }

  addStyle() {
    let style = document.getElementById('sliderCarusel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `
      .js-slider {
        overflow: hidden !important;
      }
      .js-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
      }
      .js-slider__item {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: auto 0 !important;
      }
    `;
    document.head.append(style);
  }

  controlSlider(){
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider(){
    if (this.options.infinity) {
      const parent = this.parent;
      const first = this.slides[0];
      const last = this.slides[this.slides.length-1];
      parent.insertBefore(last, first);
    }else {
      if(this.options.position > 0){

      --this.options.position;
      
      this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.widthSlide}%)
      `;
      }
    }
    
  }
  
  nextSlider(){
    if(this.options.infinity){
      const parent = this.parent;
      const first = this.slides[0];
      parent.append(first);
    } else {      
      if(this.options.position < this.slides.length - this.slidesToShow) {

        ++this.options.position;
      }      

      this.wrap.style.transform = `
        translateX(-${this.options.position * this.options.widthSlide}%)
      `;
    }
  
  }

  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'js-slider__prev';
    this.next.className = 'js-slider__next';

    this.main.append(this.prev);
    this.main.append(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .js-slider__prev,
      .js-slider__next {
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
      }
      .js-slider__prev {
        border-right-color: #19b5fe;
      }
      .js-slider__next {
        border-left-color: #19b5fe;
      }
      .js-slider__prev:hover,
      .js-slider__next:hover,
      .js-slider__prev:focus,
      .js-slider__next:focus{
        background: transparent;
        outline: transparent;
      }
    `;

    document.head.append(style);
  }

  responseInit() {
    const slidesToShowDefault = this.slidesToShow;
    const allResponse = this.responsive.map(item => item.breakpoint);
    const maxResponse = Math.max(...allResponse);

    const checkResponse = ()=> {
      const widthWindow = document.documentElement.clientWidth;
      if ( widthWindow < maxResponse) {
        for ( let i = 0; i < allResponse.length; i++) {
          if (widthWindow < allResponse[i]){
            this.slidesToShow = this.responsive[i].slideToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
      }
    };

    checkResponse();

    window.addEventListener('resize', checkResponse);
  }

}

export default SliderCarousel;