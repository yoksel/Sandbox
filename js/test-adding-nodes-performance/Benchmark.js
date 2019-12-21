export default class Benchmark {
  constructor({
    funcsList,
    funcRepeat,
    benchRepeat
  }) {
    this.funcsList = funcsList;
    this.funcRepeat = funcRepeat;
    this.benchRepeat = benchRepeat;
    this.resultTBody = document.querySelector('.result__tbody');
    this.setStatus('Результаты появятся здесь.<br> Во время выполнения тестов страница может какое-то время<br>не реагировать на действия пользователя.');

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
    this.resultTBody.innerHTML =`<tr><td colspan="2" class="result__status">${message}</td></tr>`;
  }

  start(control) {
    control.disabled = true;
    control.innerHTML = 'Тесты запущены...';

    // Нужно чтобы действия с кнопкой успели отработать
    // до зависания страницы
    setTimeout(() => {
      this.runBenchmarksList();
      control.disabled = false;
      control.innerHTML = 'Запустить тесты';
    }, 500);
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
        <td><h3>${item.name}()</h3>
        ${item.desc}</td>
        <td>${item.time / 1000}s</td>
      </tr>`
    })

    this.resultTBody.innerHTML = '';
    this.resultTBody.insertAdjacentHTML('afterBegin', resultStr);
  }
}
