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
| props | Required | [SearchProps](../../Enumeration/SearchProps.md) |  | No description provided. |

## Returns

[ApiRedactAnnotation](../../ApiRedactAnnotation/ApiRedactAnnotation.md)[]

## Example

This example search some word in document and adds a redact annotation to it.

```javascript editor-pdf
let doc = Api.GetDocument();
doc.SearchAndRedact({text: "Lorem", matchCase: false, wholeWords: false});
doc.ApplyRedact();
console.log(`We searched for the word lorem in the document and applied redact annotation to all matches.`);
```
