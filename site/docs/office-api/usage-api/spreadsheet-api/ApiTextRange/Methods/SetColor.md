# SetColor

Sets the text color of the current range.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | Pass *null* to remove the text color. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Colour the text of a range in a shape on a worksheet.

```javascript editor-xlsx
// The colour is passed as an ApiColor object and applies to the covered fragment only.

// Paint the first word red.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetColor(Api.RGB(255, 0, 0));
```
