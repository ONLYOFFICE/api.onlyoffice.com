# GetClassType

Returns a type of the ApiWatermarkSettings class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"watermarkSettings"

## Example

Retrieve the class type of a watermark settings in a document.

```javascript editor-docx
// How to identify the class type of a watermark settings in a document?

// Obtain the class type identifier of a watermark settings object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
