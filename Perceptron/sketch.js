let perceptron;
let points = new Array(100);

function setup(){
    createCanvas(550,550);
    perceptron = new Perceptron(3);
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1,1),random(-1,1));
        
    }
}

function draw() {
    background(255);
    points.forEach(point => {
        point.show();
    });
    noStroke();
    // for (let i = 0; i < points.length; i++) {
    //     const pt = points[i];
    //     const inputs = [pt.x, pt.y];
    //     const target = pt.label;
    //     const guess = perceptron.guess(inputs);
    // }
    points.forEach(point => {
        const inputs = [point.x,point.y,point.bias];
        const target = point.label;
        const guess = perceptron.guess(inputs);
        
        if(guess == target){
            fill(0,255,0);
        } else {
            fill(255,0,0);
        }
        ellipse(point.getPixelX(), point.getPixelY(), 15,15);
    });
    drawLine();

    trainSinglePoint();
}

function drawLine() {
    stroke(0);
    const p1 = new Point(-1,f(-1));
    const p2 = new Point(1,f(1));
    line(p1.getPixelX(),p1.getPixelY(),p2.getPixelX(),p2.getPixelY());
}

let trainningIndex = 0;

function trainSinglePoint() {
    const point = points[trainningIndex];
    const inputs = [point.x,point.y,point.bias];
    perceptron.train(inputs,point.label);
    trainningIndex++;
    if(trainningIndex = 0);
}
