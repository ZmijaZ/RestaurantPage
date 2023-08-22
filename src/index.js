function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => console.log("Button check");

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
