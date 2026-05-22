# SetCaps

Specifies that any lowercase characters in this paragraph are formatted for display only as their capital letter character equivalents.

## Syntax

```javascript
expression.SetCaps(isCaps);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | Required | boolean |  | Specifies that the contents of the current paragraph are displayed capitalized. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## Example

Display all paragraph text in capital letters in a document.

```javascript editor-docx
// How do I make all letters in a paragraph appear as uppercase in a document?

// Apply all-caps formatting to turn lowercase letters into capitals throughout a paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to capitalized letters.");
paragraph.SetCaps(true);
```
