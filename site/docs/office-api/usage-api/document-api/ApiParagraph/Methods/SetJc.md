# SetJc

Sets the paragraph contents justification.

Inherited from [ApiParaPr.SetJc](../../ApiParaPr/Methods/SetJc.md).

## Syntax

```javascript
expression.SetJc(sJc);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sJc | Required | "left" \| "right" \| "both" \| "center" |  | The justification type that will be applied to the paragraph contents. |

## Returns

boolean

## Example

Align paragraph text to the left, right, center, or both sides in a document.

```javascript editor-docx
// How do I control the horizontal alignment of a paragraph in a document?

// Apply different text alignment options to paragraphs in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text in it aligned by the left side. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("left");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the right side. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("right");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("center");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text in it aligned by both sides (justified). ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paragraph.SetJc("both");
doc.Push(paragraph);
```
