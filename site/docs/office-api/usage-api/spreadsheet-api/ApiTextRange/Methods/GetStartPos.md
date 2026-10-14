# GetStartPos

Returns the start position of the current range.

## Syntax

```javascript
expression.GetStartPos();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the start position of a text range in a shape on a worksheet.

```javascript editor-xlsx
// Positions are counted in characters from the beginning of the text body.

// Read where a sub-range covering the second word starts.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let word = range.GetRange(6, 11);
let start = word.GetStartPos();

worksheet.GetRange("A1").SetValue("GetStartPos: " + start);
```
