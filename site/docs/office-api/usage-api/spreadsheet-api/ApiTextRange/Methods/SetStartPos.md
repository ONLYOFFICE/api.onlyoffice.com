# SetStartPos

Sets the start position of the current range.

## Syntax

```javascript
expression.SetStartPos(pos);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | Start position. |

## Returns

boolean

## Example

Move the start of a text range in a shape on a worksheet.

```javascript editor-xlsx
// The range keeps its end and starts covering a shorter fragment.

// Move the start of the range past the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let part = range.GetRange(0, 11);
part.SetStartPos(6);

worksheet.GetRange("A1").SetValue("SetStartPos: " + part.GetText());
```
