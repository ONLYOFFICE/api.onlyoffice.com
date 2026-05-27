# SetItalic

Sets the italic property to the text character.

## Syntax

```javascript
expression.SetItalic(isItalic);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | boolean |  | Specifies that the contents of the current paragraph are displayed italicized. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Apply italic styling to the text of a paragraph in a document.

```javascript editor-docx
// How do I make the text in a paragraph appear in italics in a document?

// Slant paragraph text into italic form to add emphasis or distinguish it from surrounding content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a text run with the font set to italicized letters.");
paragraph.SetItalic(true);
```
