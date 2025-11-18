const state = {
  carrotCount: 0,
  rightAnswer: 0,
}

const SYMBOLS = [`+`, `-`];

const randNum = () => {
  const newNum = Math.floor(Math.random() * 10);
  return newNum;
}

const randSymbol = () => {
  const newSymIndex = Math.floor(Math.random() * SYMBOLS.length);
  return SYMBOLS[newSymIndex];
}

const addCarrot = () => {
  state.carrotCount++;
  render();
}

// Component Functions
const CarrotCount = () => {
  const $carrorEl = document.createElement(`h2`);
  $carrorEl.innerText = `Carrot Count: ${state.carrotCount}`;
  return $carrorEl;
}

const render = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
  <h1>Bunny Math</h1>
  <CarrotCount></CarrotCount>
  <MathForm></MathForm>
  <TryAgain></TryAgain>`;

  document.querySelector(`CarrotCount`).replaceWith(CarrotCount());
}

render();