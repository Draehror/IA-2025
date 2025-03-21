class Perceptron {
    weights;
    lr = 0.1;

    constructor(numberWeights) {
        this.weights = new Array(numberWeights);
        this.weights.forEach((weight,i) =>{
            this.weights[i] = random(-1,1);
        });

    }

    guess(inputs){
        let sum = 0;
        
        this.weights.forEach((weight,i)=>{
            sum += weight*inputs[i];
        });

        return sign(sum);
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