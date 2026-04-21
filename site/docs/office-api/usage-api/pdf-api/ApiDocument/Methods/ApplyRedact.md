# ApplyRedact

Applies added redact.

## Syntax

```javascript
expression.ApplyRedact();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Add a redact annot to first page and apply redact.

```javascript editor-pdf
// How do I apply redact in a PDF document?

// Apply redact using a document object.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
```
