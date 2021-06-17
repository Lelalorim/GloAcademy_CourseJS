'use strict';

const chaptersCollection = document.querySelectorAll('ul'),
  book = document.querySelectorAll('.book'),
  banner = document.querySelector('.adv'),
  imgBackground = document.body;

banner.remove();

book[0].before(book[1]);
book[5].after(book[2]);
book[4].after(book[3]);

imgBackground.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

chaptersCollection[0].children[3].after(chaptersCollection[0].children[6]);
chaptersCollection[0].children[5].before(chaptersCollection[0].children[8]);
chaptersCollection[0].children[10].before(chaptersCollection[0].children[2]);

chaptersCollection[4].children[4].innerText = 'Книга 3. this и Прототипы Объектов';

chaptersCollection[5].children[3].before(chaptersCollection[5].children[9]);
chaptersCollection[5].children[5].after(chaptersCollection[5].children[2]);
chaptersCollection[5].children[8].after(chaptersCollection[5].children[6]);

const newChapter = chaptersCollection[2].children[8].cloneNode(true);
newChapter.textContent = 'Глава 8: За пределами ES6';
chaptersCollection[2].append(newChapter);
chaptersCollection[2].children[8].after(chaptersCollection[2].children[10]);