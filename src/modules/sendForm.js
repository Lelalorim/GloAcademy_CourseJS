const sendForm = () => {
  const errorMessage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `
  font-size: 2rem;
  color: aquamarine;
  `;

  document.addEventListener('submit', event => {
    const target = event.target;
    event.preventDefault();
    target.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    const formData = new FormData(target);
    const body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });
    target.reset();

    const postData = body => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

    };

    postData(body)
      .then((response) => {
        if (response.status !== 200) throw new Error('status network not 200');
        statusMessage.textContent = successMessage;
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.error(error);
      });
  });

};

export default sendForm;