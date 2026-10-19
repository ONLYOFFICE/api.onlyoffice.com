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

Set the text color for all runs within a text range.

```javascript editor-pptx
// Useful for highlighting a selection with a specific color.

// Apply a red color to the entire text range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This text will be displayed in red using the text range API.");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.SetColor(Api.RGB(255, 0, 0));
```
