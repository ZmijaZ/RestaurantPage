import { Contact } from "./contact";
import { Div } from "./functions";
import { Header } from "./header";
import { Home } from "./home";
import { Menu } from "./menu";

const Main = () => {
  return Div();
};

const main = Main();

const home = Home();
const menu = Menu();
const contact = Contact();

main.appendChild(home);

const function1 = () => {
  console.log("Home");
  main.textContent = "";
  main.appendChild(home);
};

const function2 = () => {
  console.log("Menu");
  main.textContent = "";
  main.appendChild(menu);
};

const function3 = () => {
  console.log("Contact");
  main.textContent = "";
  main.appendChild(contact);
};

document.body.appendChild(Header(function1, function2, function3));

document.body.appendChild(main);
