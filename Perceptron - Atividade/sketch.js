let perceptron;
let points = new Array(200);
let isTraining = true;
let guessRatio = true;

function setup(){
    createCanvas(550,550);
    perceptron = new Perceptron(3);
    for (let i = 0; i < points.length; i++) {
        points[i] = new Point(random(-1,1),random(-1,1));
        
    }
}
count = 0;
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
    if(calcGuessRatio){
        trainSinglePoint();
    }
    if (!calcGuessRatio) {
        console.log("Terminou");
    }


    // drawLine();
    // if (count <= 100) {
    //     count += trainSinglePoint();
    // }    
    // if(count == 100){
    //     console.log("parou");
    // }
}
function calcGuessRatio() {
    let testPoints = new Array(200);
    let correctsGuess = 0;
    for (let i = 0; i < testPoints.length; i++) {
        testPoints[i] = new Point(random(-1,1),random(-1,1));
        const inputs = [testPoints[i].x, testPoints[i].y, testPoints[i].bias];
        const guess = perceptron.guess(inputs);
        if(guess == testPoints[i].label){
            correctsGuess++;
        }
    }
    console.log(`Taxa de acertos: ${correctsGuess/2}%`);
    if(correctsGuess == 200)
        return false;
}



function drawLine() {
    stroke(0);
    const p1 = new Point(-1,f(-1)); 
    const p2 = new Point(1,f(1));
    line(p1.getPixelX(),p1.getPixelY(),p2.getPixelX(),p2.getPixelY());

    stroke(0,0,255);
    const guessP1 = new Point(-1, perceptron.guessY(-1));
    const guessP2 = new Point(1, perceptron.guessY(1));
    line(guessP1.getPixelX(), guessP1.getPixelY(), guessP2.getPixelX(), guessP2.getPixelY());
}

let trainningIndex = 0;

function trainSinglePoint() {
    const point = points[trainningIndex];
    const inputs = [point.x, point.y, point.bias];
    perceptron.train(inputs, point.label);
    trainningIndex++;
    if(trainningIndex == points.length){
        trainningIndex = 0;
    }
}


/*apos 100 gerações parar o treinamento
criar 100 novos psontos e mostrar a taxa de acerto do algoritmo
taxa de acerto = X%;
*/