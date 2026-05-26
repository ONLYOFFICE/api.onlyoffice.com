# SetUnderline

Specifies that the contents of this paragraph are displayed along with a line appearing directly below the character
(less than all the spacing above and below the characters on the line).

## Syntax

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | Required | boolean |  | Specifies that the contents of the current paragraph are displayed underlined. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Underline all the text in a paragraph to draw attention to it in a document.

```javascript editor-docx
// How do I display a line beneath every word in a paragraph in a document?

// Emphasize paragraph content by enabling underlining for the entire block of text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);
```
