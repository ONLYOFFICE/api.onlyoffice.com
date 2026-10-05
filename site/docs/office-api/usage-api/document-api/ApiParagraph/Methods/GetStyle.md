# GetStyle

Returns the paragraph style method.

Inherited from [ApiParaPr.GetStyle](../../ApiParaPr/Methods/GetStyle.md).

## Syntax

```javascript
expression.GetStyle();
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

Read the style applied to a paragraph in a document.

```javascript editor-docx
// How do I get the name of the style assigned to a paragraph in a document?

// Apply a heading style, then retrieve and display the style name to confirm the assignment in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 6");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("This is a text in a paragraph styled with the 'Heading 6' style.");
let style = paragraph.GetStyle();
paragraph.AddLineBreak();
paragraph.AddText("Style: " + style.GetName());
```
