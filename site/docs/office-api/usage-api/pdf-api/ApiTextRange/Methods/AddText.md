# AddText

Adds a text to the specified position. The current range is expanded to include the added text.

## Syntax

```javascript
expression.AddText(text, position);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | String |  | The text that will be added. |
| position | Optional | "after" \| "before" | "after" | The position where the text will be added ("before" or "after" the range specified). |

## Returns

boolean

## Example

Add text to a text range in a shape on a PDF page.

```javascript editor-pdf
// The range grows to include the added text.

// Append a word after the range.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello");

const range = shape.GetTextRange();

range.AddText(" World", "after");

const reportFill = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const report = Api.CreateShape("rect", 200 * 36000, 40 * 36000, reportFill, stroke);
report.SetPosition(608400, 4000000);
page.AddObject(report);
report.GetContent().GetElement(0).AddText("AddText: " + shape.GetTextRange().GetText());
```
