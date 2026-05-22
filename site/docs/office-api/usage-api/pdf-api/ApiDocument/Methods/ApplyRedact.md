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

Hide sensitive content permanently in a PDF.

```javascript editor-pdf
// Can I remove information so it cannot be recovered in a PDF?

// Cover and protect confidential areas in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
```
