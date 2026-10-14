# CreateMath

Creates a math equation from a linear text string. The resulting object can be inserted into a paragraph the same way as a run (e.g. via [ApiParagraph#AddElement](../../ApiParagraph/Methods/AddElement.md) or [ApiParagraph#Push](../../ApiParagraph/Methods/Push.md)).

## Syntax

```javascript
expression.CreateMath(text, format);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | An equation written as a linear text string. |
| format | Optional | "unicode" \| "latex" \| "mathml" | "unicode" | The format of the specified linear representation. |

## Returns

[ApiMath](../../ApiMath/ApiMath.md)

## Example

Build a math equation object and insert it into a shape's paragraph like a text run in a spreadsheet.

```javascript editor-xlsx
// Insert a formula into a shape as if it were a run of text in a spreadsheet.

// Produce a reusable equation object and place it into a shape's paragraph content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

let paragraph = shape.GetContent().GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
```
