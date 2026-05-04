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

Wrap the paragraph content in a mail merge field in a document.

```javascript editor-docx
// How to create a paragraph wrapped in 'Mail Merge Field' in a document.

// Add a paragraph to the mail merge field in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
