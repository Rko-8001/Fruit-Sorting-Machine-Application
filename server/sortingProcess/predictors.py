

def colorPredictor(image):
    return "red"

def freshnessPredictor(image):
    return "fresh"

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