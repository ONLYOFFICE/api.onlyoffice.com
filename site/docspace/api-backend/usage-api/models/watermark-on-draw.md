# WatermarkOnDraw
The document watermark parameters.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **width** | **Double** (double) | Defines the watermark width measured in millimeters. | [optional] [example: `150`] |
| **height** | **Double** (double) | Defines the watermark height measured in millimeters. | [optional] [example: `100`] |
| **margins** | **List** (int32) | Defines the watermark margins measured in millimeters. | [optional] [example: `[10, 10, 10, 10]`] [nullable] |
| **fill** | **String** | Defines the watermark fill color. | [optional] [example: `#FF0000`] [nullable] |
| **rotate** | **Integer** (int32) | Defines the watermark rotation angle. | [optional] [example: `45`] |
| **transparent** | **Double** (double) | Defines the watermark transparency percentage. | [optional] [example: `0.4`] |
| **paragraphs** | [**List**](paragraph.md) | The list of paragraphs of the watermark. | [optional] [example: `[{align=2, runs=[{fill=[124, 124, 124], text=CONFIDENTIAL, fontSize=26}]}]`] [nullable] |
