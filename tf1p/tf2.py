import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

np.set_printoptions(precision=3,suppress=True)


url = 'auto-mpg.data'

column_names = [
    'MPG', 'Cylinders', 'Displacement', 'Horsepower', 'Weight',
    'Acceleration', 'Model Year', 'Origin'
]

raw_dataset = pd.read_csv(
    url,
    names=column_names,
    na_values='?',
    comment='\t',
    sep=' ',
    skipinitialspace=True
)

dataset = raw_dataset.copy()

dataset = dataset.dropna()

dataset['Origin'] = dataset['Origin'].map({1:'USA',2:'Europe',3:'Japan'})
dataset = pd.get_dummies(dataset, columns=['Origin'],prefix='',prefix_sep='')

train_dataset = dataset.sample(frac=0.8,random_state=0)
test_dataset = dataset.drop(train_dataset.index)

sns.pairplot(
    train_dataset[['MPG','Cylinders','Displacement','Weight']],
    diag_kind='kde'
)
plt.show()

# print(train_dataset.describe().transpose())

train_features =  train_dataset.copy()
test_features = test_dataset.copy()

train_labels = train_features.pop('MPG')
test_labels = test_features.pop('MPG')