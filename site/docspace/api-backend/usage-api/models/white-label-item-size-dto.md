# WhiteLabelItemSizeDto
The pixel box a logo slot is drawn in, in the shape the imaging library reports a geometry.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **aspectRatio** | **Boolean** | Whether the numbers are to be read as an aspect ratio rather than as pixels. Always `false` on the sizes this API reports. | [optional] [example: `false`] |
| **fillArea** | **Boolean** | Whether an image would be scaled to cover the box rather than to fit inside it. Always `false` here. | [optional] [example: `false`] |
| **greater** | **Boolean** | Whether scaling would apply only to an image larger than the box. Always `false` here. | [optional] [example: `false`] |
| **height** | **Integer** (int32) | The height of the box in pixels - one of the two fields of this object that carry information. | [optional] [example: `48`] |
| **ignoreAspectRatio** | **Boolean** | Whether scaling would be allowed to distort the image. Always `false` here. | [optional] [example: `false`] |
| **isPercentage** | **Boolean** | Whether `width` and `height` are to be read as percentages. Always `false` here, so both are pixels. | [optional] [example: `false`] |
| **less** | **Boolean** | Whether scaling would apply only to an image smaller than the box. Always `false` here. | [optional] [example: `false`] |
| **limitPixels** | **Boolean** | Whether the box is to be read as a total pixel-area budget instead of as two dimensions. Always `false` here. | [optional] [example: `false`] |
| **width** | **Integer** (int32) | The width of the box in pixels - the other field of this object that carries information. | [optional] [example: `422`] |
| **x** | **Integer** (int32) | The horizontal offset of the box from the origin. Always `0` here. | [optional] [example: `0`] |
| **y** | **Integer** (int32) | The vertical offset of the box from the origin. Always `0` here. | [optional] [example: `0`] |
