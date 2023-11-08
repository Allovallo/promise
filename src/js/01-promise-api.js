/*
 * Створення промису
 *  - Клас Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Проміс виконано успішно, з результатом (виконано, fulfilled)');
    }
    reject('Проміс виконано з помилкою (відклонено, rejected)');
  }, 1000);
});

promise.then(onFulfilled, onRejected);

function onFulfilled(result) {
  console.log('onFulfilled!');
  console.log(`✅ ${result}`);
}

function onRejected(result) {
  console.log('onRejected!');
  console.log(`❌ ${error}`);
}

/*
 * Ланцюжки промісів (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('Я буду виконаний в будь-якому випадку'));
