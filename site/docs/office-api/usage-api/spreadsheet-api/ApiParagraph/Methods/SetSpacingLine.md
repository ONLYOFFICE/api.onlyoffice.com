# SetSpacingLine

Sets the paragraph line spacing. If the value of the sLineRule parameter is either 
"atLeast" or "exact", then the value of nLine will be interpreted as twentieths of a point. If 
the value of the sLineRule parameter is "auto", then the value of the 
nLine parameter will be interpreted as 240ths of a line.

Inherited from [ApiParaPr.SetSpacingLine](../../ApiParaPr/Methods/SetSpacingLine.md).

## Example

Set the paragraph line spacing in a spreadsheet.

```javascript editor-xlsx
// How to add a spacing line between paragraphs in a spreadsheet.

// Get a paragraph from the shape's content then add a text specifying spacing between text lines in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
```
