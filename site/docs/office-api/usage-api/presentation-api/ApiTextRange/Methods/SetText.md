# SetText

Replaces all text content with the given string. Use "\r" to separate paragraphs.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | New text value. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Set new text content to a range, replacing the existing text.

```javascript editor-pptx
// Useful for swapping out a shape's text without recreating the range.

// Replace the shape text with new content and verify the result.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Old text");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetText("New text");

const fill2 = Api.CreateSolidFill(Api.RGB(200, 230, 255));
const shape2 = Api.CreateShape("rect", 300 * 36000, 80 * 36000, fill2, stroke);
shape2.SetPosition(608400, 6000000);
shape2.GetDocContent().GetElement(0).AddText("After SetText: " + JSON.stringify(range.GetText()));
slide.AddObject(shape2);
```
