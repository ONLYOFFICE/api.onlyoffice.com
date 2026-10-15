# MoveCursorRight

Moves the cursor to the right.

## Syntax

```javascript
expression.MoveCursorRight(count, addToSelect, byWords);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of movements. |
| addToSelect | Optional | boolean | false | Specifies whether to select text during the move. |
| byWords | Optional | boolean | false | Specifies whether to move by words instead of by character. |

## Returns

boolean

## Example

Move the text cursor one position to the right within a shape text range.

```javascript editor-pptx
// Cursor movement methods allow precise text navigation in interactive or plugin mode.

// Position the cursor mid-word, move it right, then insert text at the new location.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
shape.GetTextRange().SetText("Hello World");
shape.GetTextRange().MoveCursorToPos(5);
presentation.MoveCursorRight(1, false, false);
presentation.EnterText("Beautiful ");
```
