import { Button, Div, TextContainter } from "./functions";

function Header(function1, function2, function3) {
  const header = document.createElement("header");

  header.appendChild(TextContainter("h1", "Mozzafiato"));

  //button creation
  const buttonHome = Button("Home");
  const buttonMenu = Button("Menu");
  const buttonContact = Button("Contact");

  //button functions
  buttonHome.addEventListener("click", () => function1());
  buttonMenu.addEventListener("click", () => function2());
  buttonContact.addEventListener("click", () => function3());

  const buttonDiv = Div();
  buttonDiv.appendChild(buttonHome);
  buttonDiv.appendChild(buttonMenu);
  buttonDiv.appendChild(buttonContact);

  header.appendChild(buttonDiv);

  return header;
}

export { Header };
