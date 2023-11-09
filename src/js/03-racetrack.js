import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  undateWinnerField('');
  updateProgressField('Заїзд розпочався, ставки не приймаються!');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    undateWinnerField(`Переміг ${horse}, який фінішував за ${time} часу!!!`);
    updateResultsTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('Заїзд закінчено, ставки приймаються!');
  });
}

function undateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

// console.log(
//   '%c Заїзд розпочався, ставки не приймаються!',
//   'color: brown; font-size: 14px',
// );

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
