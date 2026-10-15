# EnterText

Add text to the document on the cursor position.

## Syntax

```javascript
expression.EnterText(text);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to add to document. |

## Returns

boolean

## Example

Insert text at the current cursor position within a shape text range.

```javascript editor-pptx
// The cursor must be positioned first using MoveCursorToPos before calling EnterText.

// Create a shape, place the cursor mid-text, and insert a word at that position.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 3000000, 1000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
const range = shape.GetTextRange();
range.SetText("Hello World");
range.MoveCursorToPos(6);
presentation.EnterText("Beautiful ");
```
