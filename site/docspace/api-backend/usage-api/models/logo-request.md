# LogoRequest
The part of an uploaded picture to use as the logo.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tmpFile** | **String** | The picture to cut the logo out of, named by the path that `POST api/2.0/files/logos` returned for it. The path may be used once and only by the account that uploaded it. | [required] [example: `/temp/logo_a1b2c3.png`] [minLength: 1] |
| **x** | **Integer** (int32) | The left edge of the rectangle cut out of the uploaded picture, counted in pixels from its left side. The picture itself was already scaled down to fit 1280 by 1280 pixels when it was uploaded. | [optional] [example: `0`] [min: 0] [max: 1280] |
| **y** | **Integer** (int32) | The top edge of the rectangle cut out of the uploaded picture, counted in pixels from its top. | [optional] [example: `0`] [min: 0] [max: 1280] |
| **width** | **Integer** (int32) | How wide a piece of the uploaded picture to cut out, in pixels. It has to be sent together with the height, and the portal builds the four logo sizes out of the piece. | [optional] [example: `300`] [min: 1] [max: 1280] |
| **height** | **Integer** (int32) | How tall a piece of the uploaded picture to cut out, in pixels. It has to be sent together with the width. | [optional] [example: `300`] [min: 1] [max: 1280] |
