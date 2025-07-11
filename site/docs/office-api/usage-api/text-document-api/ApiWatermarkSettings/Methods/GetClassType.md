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

This example gets a class type and pastes it into the document.

```javascript editor-docx
// How to get a class type of ApiWatermarkSettings.

// Retrieve class type of ApiWatermarkSettings object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let watermarkSettings = doc.GetWatermarkSettings();
let classType = watermarkSettings.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
