import tensorflow as tf
import plotly.graph_objects as go

#criar dados do treinamento

xs = tf.constant([0,1,2,3,4], dtype=tf.float32)
ys = xs * 1.2 + 5

#defina um modelo de regressao linear

model = tf.keras.Sequential([
    tf.keras.layers.Dense(units=1,input_shape=[1])
])

#especifique a perda e otimizador
model.compile(loss="mean_squared_error", optimizer="sgd")

#treine o modelo
print("Model is Training!")
model.fit(xs, ys, epochs=50)

#use o modelo
def linear_reg():
    x_max = 20
    x_arr = []
    y_arr = []
    correct_arr = []

    for x in range(10, x_max+1):
        x_tensor = tf.constant([float(x)], dtype=tf.float32)
        y_pred = model.predict(x_tensor,verbose=0)
        x_arr.append(x)
        y_arr.append(float(y_pred[0][0]))
        correct_arr.append(float(x * 1.2 + 5))

    display(x_arr, y_arr, correct_arr)
    plot_results(x_arr, y_arr, correct_arr)

def display(x_arr, y_arr, correct_arr):
    text = "Correct Predicted\n"
    for i in range(0,len(x_arr)):
        correct = correct_arr[i]
        predicted = y_arr[i]
        text += f"{correct:.4f} {predicted:.4f} \n"

    print(text)

def plot_results(x_arr, y_arr, correct_arr):
    fig = go.Figure()
    fig.add_trace(go.Scatter(x=x_arr,y=correct_arr,mode="markers",name="Correct"))
    fig.add_trace(go.Scatter(x=x_arr,y=y_arr,mode="markers",name="Predicted"))
    fig.update_layout(
        title="Linear Regression Prediction",
        xaxis_title="X values",
        yaxis_title="Y values"
    )

    fig.show()

#Execute 
linear_reg()






