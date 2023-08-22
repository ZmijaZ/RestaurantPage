const Button = (text) => {
  const button = document.createElement("button");

  button.innerText = text;

  return button;
};

const Div = () => {
  return document.createElement("div");
};

const TextContainter = (type, text) => {
  const element = document.createElement(type);
  element.innerText = text;

  return element;
};

export { Button, Div, TextContainter };
