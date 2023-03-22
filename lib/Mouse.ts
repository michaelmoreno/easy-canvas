export default class Mouse {
  leftClick: boolean;
  rightClick: boolean;

  constructor() {
    this.leftClick = false;
    this.rightClick = false;

    document.addEventListener("mousedown", (event) => {
      this.leftClick = true;
    });
    document.addEventListener("mouseup", (event) => {
      this.leftClick = false;
    });
  }
}
