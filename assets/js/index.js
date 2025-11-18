const state = {
  firstNum: 0,
  secondNum: 0,
  symbol: null,
  carrotCount: 0,
  tryAgain: `hide`
}

const SYMBOLS = [`+`, `-`];

const render = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
  <h1>Bunny Math</h1>
  <CarrotCount></CarrotCount>
  <MathForm></MathForm>
  <TryAgain></TryAgain>`;
}

render();