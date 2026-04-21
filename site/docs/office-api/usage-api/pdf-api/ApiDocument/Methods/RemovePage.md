# RemovePage

Removes page by index from document

## Syntax

```javascript
expression.RemovePage(nPos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | page position |

## Returns

boolean

## Example

Remove page from document in a PDF document.

```javascript editor-pdf
// How can I remove the page using a document in a PDF document?

// Remove the page for a document in a PDF document.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
