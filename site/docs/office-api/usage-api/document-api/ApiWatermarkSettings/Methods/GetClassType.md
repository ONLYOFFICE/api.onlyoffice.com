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

Read the type identifier of a watermark settings object in a document.

```javascript editor-docx
// How do I find out what kind of object holds the watermark configuration in a document?

// Confirm the category of watermark settings by printing its type label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
