# SetColor

Sets the text color of the current range.

## Syntax

```javascript
expression.SetColor(color);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | Pass *null* to remove the text color. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Colour the text of a range in a shape on a PDF page.

```javascript editor-pdf
// The colour is passed as an ApiColor object and applies to the covered fragment only.

// Paint the first word red.

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

range.GetRange(0, 5).SetColor(Api.RGB(255, 0, 0));
```
