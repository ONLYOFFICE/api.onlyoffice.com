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

Set the bold property to the text character in a document.

```javascript editor-docx
// How to make the paragraph text bold in a document.

// Get the first paragraph and set it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);
```
