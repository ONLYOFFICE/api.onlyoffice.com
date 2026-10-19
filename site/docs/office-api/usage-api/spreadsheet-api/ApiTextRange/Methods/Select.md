# Select

Selects the text range in the editor.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select the text covered by a range in a shape on a worksheet.

```javascript editor-xlsx
// The selection is made in the editor, as if the user had made it.

// Select the second word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(6, 11).Select();
```
