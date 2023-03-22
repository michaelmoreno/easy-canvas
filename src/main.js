import Canvas from "../lib/Canvas";
import Keyboard from "../lib/Keyboard";
import Mouse from "../lib/Mouse";

var keyboard = new Keyboard();
var mouse = new Mouse();
var canvas = new Canvas();

function frameLoop() {
  // clear last frame for the illusion of movement
  canvas.erase();

  // things that happen in the game every frame
  canvas.fillRectangle(0, 0, 50, 50, "blue");

  // move on to the next frame, repeat all above
  requestAnimationFrame(frameLoop);
}

frameLoop();
