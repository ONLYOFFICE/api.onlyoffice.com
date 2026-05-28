# GetType

Returns the type of the watermark in the document.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[WatermarkType](../../Enumeration/WatermarkType.md)

## Example

Read whether the watermark is text or an image in a document.

```javascript editor-docx
// How do I find out what kind of watermark is applied in a document?

// Determine the category of the watermark currently used in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Watermark Type = " + classType);
doc.Push(paragraph);
```
