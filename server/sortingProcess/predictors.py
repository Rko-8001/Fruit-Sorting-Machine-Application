import cv2
import numpy as np
from tensorflow.keras.models import load_model

freshnessModel = load_model("models/freshnessModel.h5")

# Function to preprocess the input image
def preprocess_image(image):
    # Resize the image to match the input size expected by the model
    resized_image = cv2.resize(image, (224, 224))  # Resize to (224, 224)
    # Normalize pixel values to the range [0, 1]
    normalized_image = resized_image / 255.0
    # Expand dimensions to match the expected input shape of the model
    input_image = np.expand_dims(normalized_image, axis=0)
    return input_image

# Function to make predictions on the image using the loaded model
def freshnessPredictor(image):
    # Preprocess the input image
    preprocessed_image = preprocess_image(image)
    # Make predictions using the loaded model
    predictions = model.predict(preprocessed_image)
    # Interpret the predictions
    if predictions[0][0] >= 0.50:
        return "fresh"
    else:
        return "rotten"

def colorPredictor(image):
    return "red"

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