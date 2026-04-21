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

Set the italic property to the text character in a document.

```javascript editor-docx
// How to make text italic in a document.

// Create a paragraph and make its text style italic in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a text run with the font set to italicized letters.");
paragraph.SetItalic(true);
```
