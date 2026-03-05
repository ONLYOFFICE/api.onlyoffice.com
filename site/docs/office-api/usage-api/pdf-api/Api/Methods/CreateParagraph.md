# CreateParagraph

Creates a new paragraph.

## Syntax

```javascript
expression.CreateParagraph();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

This example creates a new paragraph and inserts it into the shape.

```javascript editor-pdf
// How to add a text.

// Insert text to the paragraph and add it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);

```
