# GetCurrentWord

Returns the current word or a part of the current word at the cursor.

## Syntax

```javascript
expression.GetCurrentWord(part);
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| part | Required | undefined \| "before" \| "after" |  | The part of the word to return. If omitted, the whole word is returned. |

## Returns

string

## Example

Read the word at the cursor, including the part before or after the cursor, in a presentation.

```javascript editor-pptx
// How do I get the word the cursor is currently placed on in a presentation?

// Place the cursor inside a word of a shape and show the whole word and its parts in a second paragraph of the shape in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("The quick brown fox jumps over the lazy dog");
shape.GetTextRange().MoveCursorToPos(18);

const word = presentation.GetCurrentWord();
const before = presentation.GetCurrentWord("before");
const after = presentation.GetCurrentWord("after");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Word: " + word + ", before the cursor: " + before + ", after the cursor: " + after);
shape.GetDocContent().Push(paragraph);
```
