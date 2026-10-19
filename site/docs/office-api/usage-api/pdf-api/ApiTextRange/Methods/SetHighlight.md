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

Highlight the text of a range with a named colour in a shape on a PDF page.

```javascript editor-pdf
// The highlight applies to the covered fragment only.

// Highlight the first word in yellow.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

range.GetRange(0, 5).SetHighlight("yellow");
```
