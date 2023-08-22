import { Button, Div, TextContainter } from "./functions";

function Header() {
  const header = document.createElement("header");

  header.appendChild(TextContainter("h1", "Mozzafiato"));

  //button creation
  const buttonHome = Button("Home");
  const buttonMenu = Button("Menu");
  const buttonContact = Button("Contact");

  //button functions
  buttonHome.addEventListener("click", () => console.log("Home"));
  buttonMenu.addEventListener("click", () => console.log("Menu"));
  buttonContact.addEventListener("click", () => console.log("Contact"));

  const buttonDiv = Div();
  buttonDiv.appendChild(buttonHome);
  buttonDiv.appendChild(buttonMenu);
  buttonDiv.appendChild(buttonContact);

  header.appendChild(buttonDiv);

  return header;
}

export { Header };
