# GetAllStyles

Returns all styles of the current document.

## Syntax

```javascript
expression.GetAllStyles();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)[]

## Example

Retrieve all styles defined in a document.

```javascript editor-docx
// How do I list every style available in a document?

// Print each style name as a paragraph to audit the complete set of styles in use.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Document styles:");
paragraph.SetBold(true);
let styles = doc.GetAllStyles();
for (let i = 0; i < styles.length; i++) {
	paragraph = Api.CreateParagraph();
	paragraph.AddText(styles[i].GetName());
	doc.AddElement(i + 1, paragraph);
}
```
