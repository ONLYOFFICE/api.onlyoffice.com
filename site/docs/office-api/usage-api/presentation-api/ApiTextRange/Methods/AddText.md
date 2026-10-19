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

Insert text at the end of a text range in a presentation shape.

```javascript editor-pptx
// Useful for appending text to a shape without replacing the existing content.

// Append " World" after the existing text in the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText(" World");
```
