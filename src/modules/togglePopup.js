const togglePopup = () => {
  const popup = document.querySelector('.popup'),
    popupClose = document.querySelector('.popup-close');

  const popupAnimateOpen = () => {
    const popupBlock = document.querySelector('.popup-content');
    popup.style.display = 'block';
    if (document.documentElement.clientWidth >= 768) {
      const step = 5;
      let stepLeft = -60;

      const popupOpen = () => {
        if (stepLeft < 40) {
          stepLeft += step;
          popupBlock.style.left = stepLeft + "%";
          requestAnimationFrame(popupOpen);
        }
      };
      requestAnimationFrame(popupOpen);
    }
  };
  const popupAnimateClose = () => {
    const popupBlock = document.querySelector('.popup-content');
    if (document.documentElement.clientWidth >= 768) {
      let stepLeft = 40;
      const step = -5;
      const popupClose = () => {
        if (stepLeft === -60) {
          popup.style.display = 'none';
          cancelAnimationFrame(popupClose);
          popupBlock.style.left = '';
          return;
        }
        stepLeft += step;
        popupBlock.style.left = stepLeft + "%";
        requestAnimationFrame(popupClose);
      };
      requestAnimationFrame(popupClose);
    } else {
      popup.style.display = 'none';

    }
    popupBlock.style.left = '';
  };

  document.addEventListener('click', event => {
    if (!event.target.matches('.popup-btn')) return;
    popupAnimateOpen();
  });

  popupClose.addEventListener('click', popupAnimateClose);

  popup.addEventListener('click', event => {
    let target = event.target;

    if (target.classList.contains('popup-close')) {
      popupAnimateClose();
    } else {

      target = target.closest('.popup-content');

      if (!target) {
        popupAnimateClose();
      }
    }

  });

};

export default togglePopup;