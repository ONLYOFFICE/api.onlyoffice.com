# GetTextRange

Returns an ApiTextRange object that represents the part of the text contained in the current paragraph. The paragraph must be attached to the document before calling this method.

## Syntax

```javascript
expression.GetTextRange(start, end);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | Optional | number | 0 | Start character position (0-based, inclusive) relative to the paragraph. |
| end | Optional | number |  | End character position (0-based, exclusive). Defaults to the end of the paragraph. |

## Returns

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## Example

Underline a part of a paragraph of a shape on a slide through a text range.

```javascript editor-pptx
// Positions are counted from the beginning of the paragraph, the end position is excluded.

// Take the range of the first five characters of the paragraph and underline it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = paragraph.GetTextRange(0, 5);
range.SetUnderline(true);
```
