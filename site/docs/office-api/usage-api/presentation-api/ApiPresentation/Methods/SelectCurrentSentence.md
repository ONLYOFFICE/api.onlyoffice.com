# SelectCurrentSentence

Selects the sentence at the cursor. The current text selection, if any, is removed first.

## Syntax

```javascript
expression.SelectCurrentSentence();
```

`expression` - A variable that represents an [ApiPresentation](../ApiPresentation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select the sentence at the cursor in a presentation.

```javascript editor-pptx
// How do I select a whole sentence from the cursor position in a presentation?

// Place the cursor inside the second sentence of a shape, select the sentence and make it bold in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

shape.GetTextRange().SetText("Slides tell a story. Every slide makes one point. Keep the text short.");
shape.GetTextRange().MoveCursorToPos(25);

presentation.SelectCurrentSentence();
Api.GetSelection().GetTextRange().SetBold(true);
```
