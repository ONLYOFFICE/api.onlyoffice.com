# MoveCursorToStart

Moves the cursor to the start of the paragraph.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.MoveCursorToStart();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Move the cursor to the beginning of a paragraph in a document.

```javascript editor-docx
// How do I place the cursor at the start of a paragraph in a document?

// Position the insertion point before all text to begin editing from the top in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor here → then at the beginning.");
paragraph.MoveCursorToStart();
```
