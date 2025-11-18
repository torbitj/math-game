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

const calcAnswer = (equation) => {
  const answer = eval(equation);
  state.rightAnswer = answer;
}

// Component Functions
const CarrotCount = () => {
  const $carrorEl = document.createElement(`h2`);
  $carrorEl.innerText = `Carrot Count: ${state.carrotCount}`;
  return $carrorEl;
}

const MathElement = () => {
  const $form = document.createElement(`form`);
  const equationEl = document.createElement(`p`);
  const firstNum = randNum();
  const secondNum = randNum();
  const operator = randSymbol();
  calcAnswer(`${firstNum}${operator}${secondNum}`)
  equationEl.innerText = `${firstNum} ${operator} ${secondNum}`;
  $form.innerHTML = `
  ${equationEl}
  <label>
      &nbsp;=&nbsp;
      <input name="guess" type="number" />
  </label>
  <button type="submit">Submit Answer</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const messageEL = document.querySelector(`h3`);
    const formData = new FormData(event.target);
    const userAnswer = Number(formData.get(`guess`));
    const { rightAnswer } = state;
    if (userAnswer === rightAnswer) {
      messageEL.innerText = `Great Job!`;
      addCarrot();
    } else {
      messageEL.innerText = `Please try again`;
    }
  });
}

const render = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
  <h1>Bunny Math</h1>
  <CarrotCount></CarrotCount>
  <MathForm></MathForm>
  <h3></h3>`;

  document.querySelector(`CarrotCount`).replaceWith(CarrotCount());
}

render();