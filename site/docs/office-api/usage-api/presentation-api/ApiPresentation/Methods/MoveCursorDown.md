# MoveCursorDown

Moves the cursor down.

## Syntax

```javascript
expression.MoveCursorDown(count, addToSelect);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of movements. |
| addToSelect | Optional | boolean | false | Specifies whether to select text during the move. |

## Returns

boolean

## Example

Move the text cursor down one line within a multi-line shape text range.

```javascript editor-pptx
// Advances the cursor from the current line to the corresponding position on the next line.

// Set up a two-line shape, position the cursor on the first line, then move it down.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1500000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("First line\nSecond line");
range.SetColor(Api.RGB(0, 0, 0));
range.MoveCursorToPos(0);
presentation.MoveCursorDown(1, false);
presentation.EnterText("[cursor] ");
```
