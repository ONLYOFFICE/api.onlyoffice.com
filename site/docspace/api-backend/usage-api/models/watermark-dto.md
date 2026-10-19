# WatermarkDto
The watermark drawn over the documents of a room while they are viewed and printed.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **additions** | [**WatermarkAdditions**](watermark-additions.md) | Which details of the reader and of the room are stamped alongside the text. The values combine, so a number that is not a member on its own is the sum of several of them, and 0 means that only the text is stamped. | [required] [enum: `1`, `2`, `4`, `8`, `16`] |
| **text** | **String** | The fixed line drawn over the document, printed before the details selected alongside it. Empty when the room stamps an image instead. | [optional] [example: `Confidential`] [nullable] |
| **rotate** | **Integer** (int32) | How far the stamp is turned, in degrees, with negative values turning it anticlockwise and 0 drawing it horizontally. | [required] [example: `-45`] |
| **imageScale** | **Integer** (int32) | How large the image is drawn, as a percentage of its own size. It is 0 for a text watermark, where nothing is scaled. | [required] [example: `100`] |
| **imageUrl** | **String** | The address the stamped picture is served from, inside the storage of the room. Empty for a text watermark. | [optional] [example: `https://portal.example.com/storage/watermark_a1b2c3.png`] [nullable] |
| **imageHeight** | **Double** (double) | The height the picture is drawn with, in pixels, kept together with the width so that the proportions survive. It is 0 for a text watermark. | [required] [example: `100.0`] |
| **imageWidth** | **Double** (double) | The width the picture is drawn with, in pixels, kept together with the height so that the proportions survive. It is 0 for a text watermark. | [required] [example: `200.0`] |
