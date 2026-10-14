# GetTextRange

Returns a text range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one.

Inherited from [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md).

## Syntax

```javascript
expression.GetTextRange();
```

`expression` - A variable that represents an [ApiGroup](../ApiGroup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Read the whole text of a drawing on a worksheet through a text range.

```javascript editor-xlsx
// The range covers the entire text body of the drawing, so no positions have to be given.

// Read the text covered by the range and put it into a cell.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();
worksheet.GetRange("A1").SetValue(range.GetText());
```
