# MoveCursorToEnd

Moves the cursor to the end of the paragraph.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.MoveCursorToEnd();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Move the cursor to the end of a paragraph in a document.

```javascript editor-docx
// How do I position the cursor after the last character of a paragraph in a document?

// Ensure further typed input appears at the tail of a paragraph by repositioning the cursor in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Place cursor at the end of this paragraph.");
paragraph.MoveCursorToEnd();
```
