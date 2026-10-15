# ApplyRedact

Applies added redact.

## Syntax

```javascript
expression.ApplyRedact(includeForms, includeAnnots);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| includeForms | Optional | boolean | true | specifies whether form fields should be included in the redaction. |
| includeAnnots | Optional | boolean | true | specifies whether annotations should be included in the redaction. |

## Returns

boolean

## Example

Hide sensitive content permanently in a PDF.

```javascript editor-pdf
// Can I remove information so it cannot be recovered in a PDF?

// Cover and protect confidential areas in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
doc.AddPage(0);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
```
