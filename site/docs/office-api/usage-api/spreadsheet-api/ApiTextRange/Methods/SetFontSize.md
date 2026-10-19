# SetFontSize

Sets the font size of the characters in the current text Range.

## Syntax

```javascript
expression.SetFontSize(fontSize);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontSize | Required | [hps](../../Enumeration/hps.md) \| null |  | The text size value measured in half-points (1/144 of an inch). Pass *null* to remove the font size. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Change the font size of a range in a shape on a worksheet.

```javascript editor-xlsx
// The size is measured in half-points, so 40 means 20pt.

// Enlarge the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetFontSize(40);
```
