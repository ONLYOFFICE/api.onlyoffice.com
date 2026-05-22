# SetText

Replaces all content of the current document content object with the specified text,
preserving the formatting of the first paragraph.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace the text of a shape's content in a presentation.

```javascript editor-pptx
// How do I overwrite all the text inside a shape's document content in a presentation?

// Clear existing text and write a new sentence into a shape's content area in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#E8D5B7'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
docContent.GetElement(0).AddText('Original shape content text.');
docContent.SetText('Updated shape content text.');
const infoParagraph = Api.CreateParagraph();
infoParagraph.AddText('Text from document content: ' + docContent.GetText());
docContent.Push(infoParagraph);
slide.AddObject(shape);
```
