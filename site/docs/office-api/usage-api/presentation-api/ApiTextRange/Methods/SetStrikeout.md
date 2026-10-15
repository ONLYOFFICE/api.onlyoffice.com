# SetStrikeout

Specifies that the contents of the current Range are displayed with a single horizontal line through the range center.

## Syntax

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | Required | boolean \| null |  | Pass *null* to remove the strikeout. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md)

## Example

Apply single strikeout formatting to all runs within a text range.

```javascript editor-pptx
// Useful for visually marking text as deleted while keeping it in place.

// Apply single strikeout to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be struck out using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetStrikeout(true);
```
