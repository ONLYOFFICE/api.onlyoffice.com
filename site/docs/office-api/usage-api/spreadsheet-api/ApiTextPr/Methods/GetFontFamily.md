# GetFontFamily

Returns the font family from the current text properties.\
The method automatically calculates the font from the theme if the font was set via the theme.

## Syntax

```javascript
expression.GetFontFamily();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets a text font family.

```javascript editor-xlsx
// How to find out a text font family.

// Get a text font family name and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
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
textProps.SetFontFamily("Arial");
paragraph = Api.CreateParagraph();
let fontFamily = textProps.GetFontFamily();
paragraph.AddText("Font family: " + fontFamily);
content.Push(paragraph);
```
