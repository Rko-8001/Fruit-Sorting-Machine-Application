import numpy as np
import tensorflow as tf
import cv2
from tensorflow.keras.preprocessing import image
import numpy as np

# Suppress deprecated warnings
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)

# Load the pre-trained model
modelVariety = tf.keras.models.load_model(r"C:\Users\goswa\Desktop\BTP\Fruit-Sorting-Machine-Application\server\sortingProcess\models\apple_variety_classifier.h5")
modelFreshness = tf.keras.models.load_model(r"C:\Users\goswa\Desktop\BTP\Fruit-Sorting-Machine-Application\server\sortingProcess\models\fruits_transfer_learning.h5")


def resize_image(image, target_size=(224, 224)):
    """
    Resize input image to the target size.
    """
    return cv2.resize(image, target_size)



def colorPredictor(image):
    # Load the image and resize to match model input
    # img = image.load_img(img_path, target_size=(224, 224))  # Adjust image size if needed
    # x = image.img_to_array(img)
    global modelVariety
    resized_image = resize_image(image, target_size=(224, 224))

    x = np.expand_dims(resized_image, axis=0) 
    x = x / 255.0  # Rescale to [0, 1]

    # Make prediction
    prediction = modelVariety.predict(x)
    predicted_class_index = np.argmax(prediction[0])

    # Get class names (assuming they are stored in a separate file or variable)
    class_names = ["Braeburn", "Fuji", "Golden Delicious", "Granny Smith", "Kashmir Apple"]  # Replace with actual class names

    # Return the predicted class name
    print("Predicted: ", class_names[predicted_class_index])
    return class_names[predicted_class_index]

def freshnessPredictor(image):
    global modelFreshness
    resized_image = resize_image(image, target_size=(224, 224))

    x = np.expand_dims(resized_image, axis=0) 
    x = x / 255.0  # Rescale to [0, 1]

    # Make prediction
    prediction = modelFreshness.predict(x)
    predicted_class_index = np.argmax(prediction[0])

    # Get class names (assuming they are stored in a separate file or variable)
    class_names = ["Non-Defective", "Defective"]  # Replace with actual class names
    
    # Return the predicted class name
    print("Predicted: ", class_names[predicted_class_index])
    return class_names[predicted_class_index]

def sizePredictor(image):
    return "small"


def predictor(image, category):
    if category == "color":
        return colorPredictor(image)
    elif category == "freshness":
        return freshnessPredictor(image)
    elif category == "size":
        return sizePredictor(image)
    else:
        return "Unknown category"