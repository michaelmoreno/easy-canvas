export default class Keyboard {
  keysPressed: { [key: string]: boolean };

  constructor() {
    document.addEventListener("keydown", (event) => {
      this.keysPressed[event.key] = true;
    });
    document.addEventListener("keyup", (event) => {
      this.keysPressed[event.key] = false;
    });
  }
}

export { Keyboard };
