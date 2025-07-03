# GetFontSize

Gets the font size from the current text properties.

## Syntax

```javascript
expression.GetFontSize();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[hps](../../Enumeration/hps.md)

## Example

This example gets a text font size.

```javascript editor-xlsx
// How to find out a text font size.

// Get a text font size and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
paragraph = Api.CreateParagraph();
let fontSize = textProps.GetFontSize();
paragraph.AddText("Font size: " + fontSize);
content.Push(paragraph);
```
