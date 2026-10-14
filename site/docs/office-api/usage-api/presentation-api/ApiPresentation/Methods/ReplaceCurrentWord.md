# ReplaceCurrentWord

Replaces the current word or a part of the current word at the cursor with the specified text.

## Syntax

```javascript
expression.ReplaceCurrentWord(text, part);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to replace the current word with. |
| part | Required | undefined \| "before" \| "after" |  | The part of the word to replace. If omitted, the whole word is replaced. |

## Returns

boolean

## Example

Replace the word at the cursor with another word in a presentation.

```javascript editor-pptx
// How do I overwrite a single word based on where the cursor is placed in a presentation?

// Place the cursor inside a word of a shape and swap the word without retyping the rest of the text in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("The quick brown cat jumps over the lazy dog");
shape.GetTextRange().MoveCursorToPos(17);

presentation.ReplaceCurrentWord("fox");
```
