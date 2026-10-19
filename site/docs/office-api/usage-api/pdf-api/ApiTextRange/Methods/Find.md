# Find

Finds the first occurrence of the given text within this range and returns it as a new ApiTextRange. Returns null if the text is not found.

## Syntax

```javascript
expression.Find(findWhat, after, matchCase, wholeWords);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| findWhat | Required | string |  | Text to search for. |
| after | Optional | number | 1 | 1-based position within this range to start searching from. |
| matchCase | Optional | boolean | false | Case-sensitive search. |
| wholeWords | Optional | boolean | false | Match whole words only. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Find a word inside a text range in a shape on a PDF page.

```javascript editor-pdf
// The result is a range that covers exactly the match.

// Paint the match red and report where it starts.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("alpha TARGET omega");

const range = shape.GetTextRange();

const found = range.Find("TARGET");
found.SetColor(Api.RGB(255, 0, 0));

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("Find: " + found.GetStartPos());
```
