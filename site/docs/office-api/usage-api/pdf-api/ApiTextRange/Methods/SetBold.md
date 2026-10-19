# SetBold

Sets bold formatting for the contents of the current text range.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean \| null |  | Pass *null* to remove the bold formatting. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Make the text of a range bold in a shape on a PDF page.

```javascript editor-pdf
// The formatting applies to the covered fragment only.

// Make the first word bold.

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

range.GetRange(0, 5).SetBold(true);
```
