# SetEndPos

Sets the end position of the current range.

## Syntax

```javascript
expression.SetEndPos(pos);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | End position. |

## Returns

boolean

## Example

Move the end of a text range in a shape on a worksheet.

```javascript editor-xlsx
// The range keeps its start and stops at the new position.

// Cut the range down to the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let part = range.GetRange(0, 11);
part.SetEndPos(5);

worksheet.GetRange("A1").SetValue("SetEndPos: " + part.GetText());
```
