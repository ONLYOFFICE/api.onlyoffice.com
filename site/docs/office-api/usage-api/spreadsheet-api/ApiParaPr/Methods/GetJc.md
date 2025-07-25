# GetJc

Returns the paragraph contents justification.

## Syntax

```javascript
expression.GetJc();
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"left" \| "right" \| "both" \| "center" \| undefined

## Example

This example shows how to get the paragraph contents justification.

```javascript editor-xlsx
// How to know the justification type of a paragraph.

// Create a paragraph set justification type, get it and display in the worksheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let justification = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + justification);
content.Push(paragraph);
```
