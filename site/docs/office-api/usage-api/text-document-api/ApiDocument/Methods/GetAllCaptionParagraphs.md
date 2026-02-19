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

This example shows how to get all caption paragraphs of the specified type from the current document.

```javascript editor-docx
// Get all caption paragraphs with the name 'Figure' and make the first one capitalized.

// Make the caption text letters uppercase.

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
