import data from './data.js';
import Benchmark from './Benchmark.js';

const runBenchmarkControl = document.querySelector('.run-benchmark');

// Запуск измерений
// -----------------------------------------------

const benchmark = new Benchmark({
  funcsList: [
    {
      func: nodesToContainerOnPage,
      desc: 'Ноды строк пишутся в&nbsp;контейнер на&nbsp;странице сразу в&nbsp;момент создания'
    },
    {
      func: htmlToWrapper,
      desc: 'Из массива данных генерится строчный HTML, который потом заменяет содержимое контейнера на&nbsp;странице'
    },
    {
      func: nodesToNewContainer,
      desc: 'Ноды строк пишутся в&nbsp;новый элемент, а&nbsp;потом&nbsp;oн заменяет контейнер на&nbsp;странице'
    },
  ],
  funcRepeat: 1000,
  benchRepeat: 20
});

runBenchmarkControl.addEventListener('click', () => {
  benchmark.start(runBenchmarkControl);
})

// Измеряемые функции
// -----------------------------------------------

// Строки пишутся прямо в элемент на странице
function nodesToContainerOnPage() {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  data.forEach(row => {
    const rowElem = document.createElement('div');
    rowElem.classList.add('container__row');

    for(let cell of Object.values(row)) {
      if(typeof cell === 'object') {
        continue;
      }

      const cellElem = document.createElement('div');
      cellElem.classList.add('container__cell');
      cellElem.innerHTML = cell;

      rowElem.append(cellElem);
    }

    container.append(rowElem);
  })
}

// Строки пишутся в новый элемент, а потом oн заменяет
// элемент на странице
function nodesToNewContainer() {
  const wrapper = document.querySelector('.wrapper');

  // Создаем контейнер для сбора строк
  const container = document.createElement('div');
  container.classList.add('container');

  data.forEach(row => {
    const rowElem = document.createElement('div');
    rowElem.classList.add('container__row');

    for(let cell of Object.values(row)) {
      if(typeof cell === 'object') {
        continue;
      }

      const cellElem = document.createElement('div');
      cellElem.classList.add('container__cell');
      cellElem.innerHTML = cell;

      rowElem.append(cellElem);
    }

    container.append(rowElem);
  })

  wrapper.innerHTML = '';
  wrapper.append(container);
}

// HTML собирается в строку, а потом заменяет содержимое container
function htmlToWrapper() {
  const container = document.querySelector('.container');
  let containerStr = '';

  data.forEach(row => {
    let rowStr = `<div class="container__row">`;

    for(let cell of Object.values(row)) {
      if(typeof cell === 'object') {
        continue;
      }

      rowStr += `<div class="container__cell">${cell}</div>`;
    }

    rowStr += `</div>`;
    containerStr += rowStr;
  })

  container.innerHTML = containerStr;
}
