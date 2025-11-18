const state = {
  firstNum: 0,
  secondNum: 0,
  symbol: null,
  carrotCount: 0,
  rightAnswer: 0,
  isRightAnswer: true
}

const SYMBOLS = [`+`, `-`];

const randNum = (stateVar) => {
  const newNum = Math.floor(Math.random() * 10);
  stateVar = randNum;
  render();
}

const randSymbol = () => {
  const newSymIndex = Math.floor(Math.random() * SYMBOLS.length);
  state.symbol = SYMBOLS[newSymIndex];
  render();
}

const addCarrot = () => {
  state.carrotCount++
  render();
}

const testAnswer = (num) => {
  const { firstNum, secondNum } = state;
  if (state.symbol === `+`) {
    state.rightAnswer = firstNum + secondNum;
  }
  else {
    state.rightAnswer = firstNum - secondNum;
  }
  if (num !== rightAnswer) {
    state.isRightAnswer = false;
  }
  render();
} 

const render = () => {
  const $app = document.querySelector(`#app`);
  $app.innerHTML = `
  <h1>Bunny Math</h1>
  <CarrotCount></CarrotCount>
  <MathForm></MathForm>
  <TryAgain></TryAgain>`;
}

render();