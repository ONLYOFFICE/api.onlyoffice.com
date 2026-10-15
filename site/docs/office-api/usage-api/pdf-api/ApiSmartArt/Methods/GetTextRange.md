# GetTextRange

Returns a text range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one.

Inherited from [ApiDrawing.GetTextRange](../../ApiDrawing/Methods/GetTextRange.md).

## Syntax

```javascript
expression.GetTextRange();
```

`expression` - A variable that represents an [ApiSmartArt](../ApiSmartArt.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Read the whole text of a drawing on a PDF page through a text range.

```javascript editor-pdf
// The range covers the entire text body of the drawing, so no positions have to be given.

// Read the text covered by the range and show it in a second drawing.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 150 * 36000, 65 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetTextRange result: " + range.GetText());
```
