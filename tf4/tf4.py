import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt
from tensorflow.keras import layers

import numpy as np

imdb = keras.datasets.imdb
(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)

# print("Training entries: {}, labels: {}".format(len(train_data), len(train_labels)))
# print(train_data[0])

# print(len(train_data[0]), len(train_data[1]))  # 218, 189 entradas com tamanhos diferentes

word_index = imdb.get_word_index()

word_index = {k: (v + 3) for k, v in word_index.items()}
word_index["<PAD>"] = 0  # Padding
word_index["<START>"] = 1  # Start of sequence
word_index["<UNK>"] = 2  # Unknown
word_index["<UNUSED>"] = 3  # Unused

reverse_word_index = dict([(value, key) for (key, value) in word_index.items()])

def decode_review(text):
    return ' '.join([reverse_word_index.get(i, '?') for i in text])

# print(decode_review(train_data[0]))  # Decodifica a primeira entrada do conjunto de treinamento

train_data = keras.preprocessing.sequence.pad_sequences(train_data, 
                                                        value=word_index["<PAD>"], 
                                                        padding='post', 
                                                        maxlen=256)
test_data = keras.preprocessing.sequence.pad_sequences(test_data,
                                                       value=word_index["<PAD>"], 
                                                       padding='post', 
                                                       maxlen=256)
# print(len(train_data[0]), len(train_data[1]))  # 256 entradas com tamanhos iguais

vocab_size = 10000
model = keras.Sequential()
model.add(keras.layers.Embedding(vocab_size, 16))
model.add(keras.layers.GlobalAveragePooling1D())
model.add(keras.layers.Dense(16, activation='relu'))
model.add(keras.layers.Dense(1, activation='sigmoid'))
# model.summary()

model.compile(optimizer='adam',
              loss='binary_crossentropy',
              metrics=['accuracy']) 

early_stopping = keras.callbacks.EarlyStopping(monitor='val_loss', patience=2)

x_val = train_data[:10000]
partial_x_train = train_data[10000:]

y_val = train_labels[:10000]
partial_y_train = train_labels[10000:]

history = model.fit(partial_x_train,
                    partial_y_train,
                    epochs=40,
                    batch_size=512,
                    validation_data=(x_val, y_val),
                    verbose=1,
                    callbacks=[early_stopping])

results = model.evaluate(test_data, test_labels, verbose=2)
#print(results)  # Avalia o modelo com os dados de teste

history_dict = history.history
#print(history_dict.keys())  # Mostra as chaves do dicionário de histórico
# print(history_dict['accuracy'])  # Acurácia do treinamento

acc = history_dict['accuracy']
val_acc = history_dict['val_accuracy']
loss = history_dict['loss']
val_loss = history_dict['val_loss']

epochs = range(1, len(acc) + 1)
# "bo" é para a linha pontilhada azul, "b" é para a linha azul sólida
plt.plot(epochs, loss, 'bo', label='Training loss')
plt.plot(epochs, val_loss, 'b', label='Validation loss')
plt.title('Training and validation accuracy')
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.legend()

plt.show()