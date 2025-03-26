class Perceptron {
    weights;
    lr = 0.1;

    constructor(numberWeights) {
        this.weights = new Array(numberWeights);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1,1);   
        }
    }

    guess(inputs){
        let sum = 0;
        
        this.weights.forEach((weight,i)=>{
            sum += weight*inputs[i];
        });

        return sign(sum);
    }
    guessY(x){
        const w0 = this.weights[0];
        const w1 = this.weights[1];
        const w2 = this.weights[2];

        return -(w2/w1) - (w0/w1) * x;
    }
    train(inputs, target){
        const guess = this.guess(inputs);
        const error = target - guess;

        for(let i = 0;i < this.weights.length; i++){
            this.weights[i] += error * inputs[i] * this.lr;
        }
    }

}

function sign(num){
    return num >= 0 ? 1 : -1;
}