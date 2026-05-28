# SetJc

Sets the paragraph contents justification.

## Syntax

```javascript
expression.SetJc(sJc);
```

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | Required | "left" \| "right" \| "both" \| "center" |  | The justification type that will be applied to the paragraph contents. |

## Returns

boolean

## Example

Align paragraph text to the center inside a shape in a spreadsheet.

```javascript editor-xlsx
// How do I change the horizontal alignment of a paragraph in a spreadsheet?

// Control whether paragraph text snaps to the left, right, center, or stretches across the full width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
```
