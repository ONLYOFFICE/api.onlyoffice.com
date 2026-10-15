# AiImagePriceDto
What an image model charges: the tokens of the request and the images that come out of it.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **prompt** | **Double** (double) | The cost of one million tokens sent to the image model, which is the prompt describing the picture. | [optional] [example: `8.0`] |
| **completion** | **Double** (double) | The cost of one million tokens the image model writes back alongside the picture. | [optional] [example: `15.0`] |
| **image** | **Double** (double) | The cost of one produced image, charged on top of the token amounts above. | [optional] [example: `30.0`] |
