# GetEndPos

Returns the end position of the current range.

## Syntax

```javascript
expression.GetEndPos();
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the end position of a text range in a shape on a PDF page.

```javascript editor-pdf
// The end position points right after the last character of the range.

// Read where a sub-range covering the second word ends.

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

const word = range.GetRange(6, 11);
const end = word.GetEndPos();

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetEndPos: " + end);
```
