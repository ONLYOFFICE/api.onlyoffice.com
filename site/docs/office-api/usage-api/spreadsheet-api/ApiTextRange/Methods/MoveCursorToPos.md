# MoveCursorToPos

Moves a cursor to the specified position within the current range.

## Syntax

```javascript
expression.MoveCursorToPos(pos);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Optional | number | 0 | The desired cursor position. |

## Returns

boolean

## Example

Move the cursor inside the text covered by a range in a shape on a worksheet.

```javascript editor-xlsx
// Places the cursor precisely before further editing.

// Move the cursor between the two words.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.MoveCursorToPos(6);
```
