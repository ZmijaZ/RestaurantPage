import { data } from "./data";
import { Button, Div, TextContainter } from "./functions";

const MenuItem = (item) => {
  const menuItem = Div();

  menuItem.appendChild(TextContainter("h2", item.name));
  menuItem.appendChild(TextContainter("p", item.ingredients));

  return menuItem;
};

const Menu = () => {
  const menu = Div();

  data.map((item) => menu.appendChild(MenuItem(item)));

  return menu;
};

export { Menu };
