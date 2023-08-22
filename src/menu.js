import { data } from "./data";
import { Button, Div, TextContainter } from "./functions";

const MenuItem = (item) => {
  const menuItem = Div();

  const menuImage = new Image();
  menuImage.src = item.image;
  menuItem.appendChild(menuImage);

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
