# GetParaId

Returns the paragraph ID.

## Syntax

```javascript
expression.GetParaId();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the paragraph ID.

```javascript editor-docx
// Method for working with the numerical identifier of a paragraph.

// Create a paragraph and display its ID.

let document = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Inserted paragraph ID: ");
let id = paragraph.GetParaId();
paragraph.AddText(id);
document.InsertContent([paragraph]);
```
