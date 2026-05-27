# SearchAndRedact

Searchs words and adds redact to it.

## Syntax

```javascript
expression.SearchAndRedact(props);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| props | Required | [SearchProps](../../Enumeration/SearchProps.md) |  | The search options. |

## Returns

[ApiRedactAnnotation](../../ApiRedactAnnotation/ApiRedactAnnotation.md)[]

## Example

Find and hide sensitive text in a PDF.

```javascript editor-pdf
// How do I black out certain words throughout a PDF?

// Search for a word and apply redaction to all matches in a PDF.

let doc = Api.GetDocument();
doc.SearchAndRedact({text: "Lorem", matchCase: false, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the word lorem in the document and applied redact annotation to all matches.`);
```
