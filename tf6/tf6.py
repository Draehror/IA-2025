import os
import tensorflow as tf
from tensorflow import keras

(train_images, train_labels), (test_images, test_labels) = tf.keras.datasets.mnist.load_data()
print("train_images.shape:", train_images.shape)
train_images, test_images = train_images / 255.0, test_images / 255.0