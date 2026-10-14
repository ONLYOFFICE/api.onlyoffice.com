# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean \| null |  | Pass *null* to remove the strikeout. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Strike out the text of a range in a shape on a worksheet.

```javascript editor-xlsx
// The formatting applies to the covered fragment only.

// Strike out the first word.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

range.GetRange(0, 5).SetStrikeout(true);
```
