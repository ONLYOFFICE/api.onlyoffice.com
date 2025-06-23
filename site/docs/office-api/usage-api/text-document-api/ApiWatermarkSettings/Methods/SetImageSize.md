# SetImageSize

Sets the size (width and height) of the watermark image in the document.

## Syntax

```javascript
expression.SetImageSize(nWidth, nHeight);
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The watermark image width. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The watermark image height. |

## Returns

boolean

## Example

This example sets the parameters of the watermark settings and apply them to the document.

```javascript editor-docx
// How to set the image size of the watermark.

// Resize the image using the watermark settings.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
```
