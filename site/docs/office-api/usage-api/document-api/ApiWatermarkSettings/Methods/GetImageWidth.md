# GetImageWidth

Returns the width of the watermark image in the document.

## Syntax

```javascript
expression.GetImageWidth();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[EMU](../../Enumeration/EMU.md) \| null

## Example

Read the width of a watermark image in a document.

```javascript editor-docx
// How do I find out how wide the watermark image is in a document?

// Check the horizontal size of a watermark image in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
let paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark width = " + doc.GetWatermarkSettings().GetImageWidth());
doc.Push(paragraph);
```
