# WrapInMailMergeField

Wraps the paragraph content in a mail merge field.

## Syntax

```javascript
expression.WrapInMailMergeField();
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Enclose a paragraph inside a mail merge field so its text acts as a merge placeholder in a document.

```javascript editor-docx
// How do I mark a paragraph as a mail merge field to be filled with data during merging in a document?

// Turn a paragraph into a dynamic merge region that gets replaced with real values during mail merge in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
