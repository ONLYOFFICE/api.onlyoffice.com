# GetSection

Returns the paragraph section.

## Syntax

```javascript
expression.GetSection();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSection](../../ApiSection/ApiSection.md)

## Example

Get the paragraph section in a document.

```javascript editor-docx
// How to get the section where the paragraph is located in a document.

// Get the paragraph section and set its page size.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a new paragraph.");
let section = paragraph.GetSection();
section.SetPageSize(7200, 4320);
```
