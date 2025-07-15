# GetImageHeight

Returns the height of the watermark image in the document.

## Syntax

```javascript
expression.GetImageHeight();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

This example sets the parameters of the watermark settings and apply them to the document.

```javascript editor-docx
// How to get the height of the image. 

// Get the watermark image height.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark height = " + doc.GetWatermarkSettings().GetImageHeight());
doc.Push(paragraph);
```
