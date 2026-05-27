# SetBold

Sets the bold property to the text character.

## Syntax

```javascript
expression.SetBold(isBold);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | Required | boolean |  | Specifies that the contents of this paragraph are displayed bold. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Make all text in a paragraph bold in a document.

```javascript editor-docx
// How do I apply bold formatting to an entire paragraph in a document?

// Emphasize a paragraph's content by enabling bold weight on all its characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);
```
