# SetTextPr

Sets the text properties to the current run.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current run. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

Set the text properties to the current run in a document.

```javascript editor-docx
// How to create the new text properties and apply it to the text run in a document.

// Create a new text run and set its properties like font size, color, etc in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.AddElement(run);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
run.SetTextPr(textPr);
```
