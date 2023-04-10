function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');


    let y = 0;
    let w = 50;
    let x1 = 100;
    let x2 = 300;
    let x3 = 500;
    while (y <= 3000) {
       
        fill('blue')
        circle(x1, y, w);
       
        fill('red')
        circle(x2, y, w);
       
        fill('green')
        circle(x3, y, w);
        y += 2;
        w += 5;


    }

   
    //noFill();
    //circle(100, 200, 50);
    //circle(100, 250, 50);
    //circle(100, 300, 50);
    //circle(100, 350, 50);
    //circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
