import { Button, Div, TextContainter } from "./functions";

import Glootie from "./photos/glootie.png";

const Home = () => {
  const home = Div();

  const image = new Image();
  image.src = Glootie;

  home.appendChild(image);
  home.appendChild(TextContainter("h2", "Best pizza eva"));
  home.appendChild(TextContainter("h2", "Made with love since forever"));

  return home;
};

export { Home };
