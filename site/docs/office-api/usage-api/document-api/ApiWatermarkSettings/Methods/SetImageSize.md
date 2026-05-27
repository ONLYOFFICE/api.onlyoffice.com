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

Control the dimensions of a watermark image in a document.

```javascript editor-docx
// How do I change how large the watermark image appears in a document?

// Scale the watermark image to a specific size in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
```
