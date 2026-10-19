# MoveCursorToPos

Moves a cursor to the specified position within the current range.

## Syntax

```javascript
expression.MoveCursorToPos(pos);
```

`expression` - A variable that represents an [ApiTextRange](../ApiTextRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Optional | number | 0 | The desired cursor position. |

## Returns

boolean

## Example

Move the editor cursor to a specific position within a text range.

```javascript editor-pptx
// Useful for placing the cursor precisely before further editing.

// Move the cursor to position 6 inside the shape text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.MoveCursorToPos(6);
```
