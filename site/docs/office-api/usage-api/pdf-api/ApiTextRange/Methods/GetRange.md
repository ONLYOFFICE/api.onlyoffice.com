# GetRange

Returns a new ApiTextRange that represents a sub-range of the current range.

## Syntax

```javascript
expression.GetRange(start, rangeEnd);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start offset (0-based) relative to the beginning of this range. |
| rangeEnd | Optional | number | -1 | End offset relative to the beginning of this range. -1 means the end of this range. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Take a sub-range of a text range in a shape on a PDF page.

```javascript editor-pdf
// Positions are counted from the beginning of the text body, not of the parent range.

// Take the second word as a sub-range and make it bold.

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

const part = range.GetRange(6, 11);
part.SetBold(true);

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("GetRange: " + part.GetText());
```
