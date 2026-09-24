# ThumbnailsRequest
The crop rectangle to apply to an avatar image.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tmpFile** | **String** | The temporary image to crop, as returned in the `data` of an upload made with `autosave` off. Only the file name part of the value is used. Omit it to re-crop the photo the profile already has. | [optional] [example: `photo_temp_123.jpg`] [nullable] |
| **x** | **Integer** (int32) | The distance in pixels from the left edge of the original image to the left edge of the crop rectangle. | [optional] [example: `100`] |
| **y** | **Integer** (int32) | The distance in pixels from the top edge of the original image to the top edge of the crop rectangle. | [optional] [example: `50`] |
| **width** | **Integer** (int32) | The width of the crop rectangle in pixels. Passing 0 together with `height` and `tmpFile` keeps the whole uploaded image instead of cropping it. | [optional] [example: `200`] |
| **height** | **Integer** (int32) | The height of the crop rectangle in pixels. Passing 0 together with `width` and `tmpFile` keeps the whole uploaded image instead of cropping it. | [optional] [example: `200`] |
