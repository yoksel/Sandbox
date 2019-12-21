import data from './data.js';
const tBodyElem = document.querySelector('.result__tbody');
const runBenchmarkControl = document.querySelector('.run-benchmark');

class BenchMark {
  constructor({
    funcsList,
    funcRepeat,
    benchRepeat,
    resultContainer,
    onFinish
  }) {
    this.funcsList = funcsList;
    this.funcRepeat = funcRepeat;
    this.benchRepeat = benchRepeat;
    this.resultContainer = resultContainer;
    this.setStatus('Результаты появятся здесь');

    this.results = this.prepareResults();
  }

  prepareResults() {
    const results = this.funcsList.reduce((prev, item) => {
      const {func, desc} = item;
      prev[func.name] = {
        name: func.name,
        desc,
        time: 0
      };

      return prev;
    },{});

    return results;
  }

  setStatus(message) {
    this.resultContainer.innerHTML =`<tr><td colspan="2" class="result__status">${message}</td></tr>`;
  }

  runBenchmarksList() {
    for (let i = 0; i < this.benchRepeat; i++) {
      this.funcsList.forEach(item => {
        this.runBenchmark(item.func);
      });
    }

    this.printResults();
  }

  runBenchmark(func) {
    let startTime = Date.now();

    for (let i = 0; i < this.funcRepeat; i++) {
      func();
    }

    this.results[func.name].time += Date.now() - startTime;
  }

  printResults() {
    const resultsList = Object.values(this.results);
    resultsList.sort((a, b) => {
      return a.time - b.time;
    });
    let resultStr = '';

    resultsList.forEach(item => {
      resultStr += `<tr>
        <td><h3>${item.name}</h3>
        ${item.desc}</td>
        <td>${item.time / 1000}s</td>
      </tr>`
    })

    this.resultContainer.innerHTML = '';
    this.resultContainer.insertAdjacentHTML('afterBegin', resultStr);
  }
}

// Запуск измерений
// -----------------------------------------------
const benchmark = new BenchMark({
  funcsList: [
    {
      func: nodesToContainerOnPage,
      desc: 'Ноды строк пишутся в контейнер на странице сразу в момент создания'
    },
    {
      func: htmlToWrapper,
      desc: 'Из массива данных генерится строчный HTML, который потом заменяет содержимое контейнера на странице'
    },
    {
      func: nodesToNewContainer,
      desc: 'Ноды строк пишутся в новый элемент, а потом oн заменяет контейнер на странице'
    },
  ],
  funcRepeat: 1000,
  benchRepeat: 20,
  resultContainer: tBodyElem,
});

runBenchmarkControl.addEventListener('click', () => {
  runBenchmarkControl.disabled = true;
  runBenchmarkControl.innerHTML = 'Тесты запущены...';

  setTimeout(() => {
    benchmark.runBenchmarksList();
    runBenchmarkControl.disabled = false;
    runBenchmarkControl.innerHTML = 'Запустить тесты';
  }, 500);
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
