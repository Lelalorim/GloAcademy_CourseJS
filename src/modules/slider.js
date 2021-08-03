const slider = () => {
  const slides = document.querySelectorAll('.portfolio-item'),
    slider = document.querySelector('.portfolio-content'),
    dotsList = document.querySelector('.portfolio-dots');


  dotsList.innerHTML = '';
  for (let i = 0; i < slides.length; i++) {
    const newElem = document.createElement('li');
    newElem.classList.add('dot');
    dotsList.append(newElem);
  }

  const dots = document.querySelectorAll('.dot');
  dots[0].classList.add('dot-active');

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySLide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startPlaySlide = (time = 3000) => {
    interval = setInterval(autoPlaySLide, time);

  };

  const stopPlaySlide = () => {
    clearInterval(interval);
  };

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('.dot, .portfolio-btn')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dots.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = (slides.length - 1);

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');

  });

  slider.addEventListener('mouseover', event => {
    if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) stopPlaySlide();
  });

  slider.addEventListener('mouseout', event => {
    if (event.target.matches('.portfolio-btn') ||
      event.target.matches('.dot')) startPlaySlide();
  });

  startPlaySlide(1500);
};

export default slider;