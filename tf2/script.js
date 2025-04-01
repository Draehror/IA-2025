async function getData(){
    const carsDataResponse = await fetch("https://storage.googleapis.com/tfjs-tutorials/carsData.json");
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower
    })).filter(car => (car.mpg != null && car.horsepower != null));

    return cleaned;
}

async function run() {
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg
    }));

    tfvis.render.scatterplot(
        {name: "Horsepower v MPG"},
        {values},
        {
            xLabel: "Horsepower",
            yLabel: "MPG",
            heigth: 300
        }
    );

    const model = createModel();

    tfvis.show.modelSummary({name: "Modelo"}, model);
}


function createModel() {
    const model = tf.sequential();
    //camada de entrada
    model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
    //camada de saida
    model.add(tf.layers.dense({units: 1, useBias: true}));
    
    return model;
}

function convertToTensor(data) {
    return tf.tidy(() => {
        //embaralha os dados
        tf.util.shuffle(data);

        const inputs = data.map((d) => d.horsepower);
        const labels = data.map((d) => d.mpg);

        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    })
}




document.addEventListener('DOMContentLoaded', run);