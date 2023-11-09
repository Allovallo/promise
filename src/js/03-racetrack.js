import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > body'),
};

refs.startBtn.addEventListener('click', () => {
  const promises = horses.map(run);
});

console.log(
  '%c Заїзд розпочався, ставки не приймаються!',
  'color: brown; font-size: 14px',
);

Promise.race(promises).then(({ horse, time }) =>
  console.log(
    `%c Переміг ${horse}, який фінішував за ${time} часу!!!`,
    'color: green; font-size: 14px;',
  ),
);

Promise.all(promises).then(() => {
  console.log(
    '%c Заїзд закінчено, ставки приймаються!',
    'color: blue; font-size: 14px',
  );
});

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(
//   '%c Заїзд розпочався, ставки не приймаються!',
//   'color: brown; font-size: 14px',
// );

// console.log(
//   `%c Переміг ${1}, який фінішував за ${1} часу!!!`,
//   'color: green; font-size: 14px;',
// );

// console.log(
//   '%c Заїзд закінчено, ставки приймаються!',
//   'color: blue; font-size: 14px',
// );
