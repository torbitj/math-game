const state = {
  carrotCount: 0,
  rightAnswer: 0
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

const MathForm = () => {
  const $form = document.createElement(`form`);
  const equation = document.createElement(`p`);
  const firstNum = randNum();
  const secondNum = randNum();
  const operator = randSymbol();
  equation.innerText = `${firstNum} ${operator} ${secondNum}`;
  $form.innerHTML = `
  ${equation}
  <label>
      &nbsp;=&nbsp;
      <input name="guess" type="number" />
  </label>
  <button type="submit">Submit Answer</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
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