# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current Range.

## Syntax

```javascript
expression.SetHighlight(colorName);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| colorName | Required | [highlightColor](../../Enumeration/highlightColor.md) |  | No description provided. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Highlight the text of a range with a named colour in a shape on a worksheet.

```javascript editor-xlsx
// The highlight applies to the covered fragment only.

// Highlight the first word in yellow.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetHighlight("yellow");
```
