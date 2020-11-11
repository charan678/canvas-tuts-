
class Animator {
    constructor() {}

    animate = (canvasContext:CanvasRenderingContext2D)=>  {
        canvasContext.beginPath();
        canvasContext.arc(150, 180, 100, 0 ,Math.PI*2, false);
        canvasContext.fillStyle='#006699';
        canvasContext.strokeStyle = "blue";
        canvasContext.fill();
        canvasContext.stroke();
    }
    
}


export default Animator; 