import { Button, Div, TextContainter } from "./functions";

const Contact = () => {
  const contact = Div();

  contact.appendChild(TextContainter("h2", "+381 238 095 82"));
  contact.appendChild(
    TextContainter("h2", "Hollywood Boulevard 42, Los Angeles, USA")
  );

  return contact;
};

export { Contact };
