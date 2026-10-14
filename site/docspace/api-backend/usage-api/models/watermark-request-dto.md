# WatermarkRequestDto
The watermark drawn over the documents of a room.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **enabled** | **Boolean** | Whether the room draws a watermark at all. Sending the object with this turned off removes the watermark the room has, and the rest of the fields are then irrelevant. | [optional] [example: `true`] [nullable] |
| **additions** | [**WatermarkAdditions**](watermark-additions.md) | Which details of the reader and of the room are stamped into the watermark alongside the text. The values combine, so several of them can be added together to stamp more than one. | [optional] [enum: `1`, `2`, `4`, `8`, `16`] |
| **text** | **String** | The fixed line drawn over the document, shown before the details selected alongside it. It is the whole watermark when no details are added. | [optional] [example: `Confidential`] [minLength: 0] [maxLength: 255] [nullable] |
| **rotate** | **Integer** (int32) | How far the watermark is turned, in degrees, with negative values turning it anticlockwise. Zero draws it horizontally across the page. | [optional] [example: `-45`] |
| **imageScale** | **Integer** (int32) | How large the watermark image is drawn, as a percentage of its own size. It applies to the image form of the watermark only. | [optional] [example: `100`] |
| **imageUrl** | **String** | The picture to use instead of a text watermark, named by the path that `POST api/2.0/files/logos` returned for an image uploaded beforehand. The portal copies it into the room when the setting is saved. | [optional] [example: `/temp/watermark_a1b2c3.png`] [nullable] |
| **imageHeight** | **Double** (double) | The height the watermark image is drawn with, in pixels, used together with the width to keep its proportions. | [optional] [example: `100.0`] |
| **imageWidth** | **Double** (double) | The width the watermark image is drawn with, in pixels, used together with the height to keep its proportions. | [optional] [example: `200.0`] |
