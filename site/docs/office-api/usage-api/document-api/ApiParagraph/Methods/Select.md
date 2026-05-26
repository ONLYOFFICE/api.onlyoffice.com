# Select

Selects the current paragraph.

## Syntax

```javascript
expression.Select();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Select an entire paragraph programmatically in a document.

```javascript editor-docx
// How do I select a paragraph to apply formatting to it in a document?

// Activate a paragraph selection and then italicize its text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let result = paragraph.Select();
if (result === true) {
	paragraph.SetItalic(true);
}
```
