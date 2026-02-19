# GetContent

Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists.

## Syntax

```javascript
expression.GetContent();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get content of the drawing.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = worksheet.AddShape('flowChartOnlineStorage', 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = drawing.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.AddText('Hello, this is the first paragraph of the drawing content!');

```
