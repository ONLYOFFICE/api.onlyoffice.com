# GetAllCaptionParagraphs

Returns all caption paragraphs of the specified type from the current document.

## Syntax

```javascript
expression.GetAllCaptionParagraphs(sCaption);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCaption | Required | [CaptionLabel](../../Enumeration/CaptionLabel.md) \| string |  | The caption label ("Equation", "Figure", "Table", or another caption label). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## Example

Collect all figure caption paragraphs and apply uppercase formatting to the first one in a document.

```javascript editor-docx
// How do I find every caption of a given type and modify its text style in a document?

// Emphasize a specific caption by converting its letters to uppercase after inserting an image in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
const logoUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
let drawing = Api.CreateImage(logoUrl, 60 * 36000, 60 * 36000);
paragraph.AddDrawing(drawing);
paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddCaption('', 'Figure', false, 'Arabic', false, undefined, 'hyphen');
let captionParagraphs = doc.GetAllCaptionParagraphs('Figure');
captionParagraphs[0].SetCaps(true);
```
