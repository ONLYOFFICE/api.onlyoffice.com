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

This example selects the paragraph.

```javascript editor-docx
// How to select the paragraph.

// Select a paragraph with a cursor.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let result = paragraph.Select();
if (result === true) {
	paragraph.SetItalic(true);
}
```
