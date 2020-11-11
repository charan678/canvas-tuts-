import * as _ from 'lodash';
import Animator from './animation/animator';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const animator:Animator = new Animator();
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let canvasContext = canvas.getContext("2d");


function loop() {
  requestAnimationFrame(loop);
  animator.animate(canvasContext);
}
loop();