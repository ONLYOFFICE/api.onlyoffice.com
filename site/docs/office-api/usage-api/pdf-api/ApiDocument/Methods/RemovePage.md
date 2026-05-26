# RemovePage

Removes page by index from document
💡  You can't delete last page 

## Syntax

```javascript
expression.RemovePage(pos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | page position |

## Returns

boolean

## Example

Delete a page from a PDF.

```javascript editor-pdf
// How do I remove an unwanted page from a PDF?

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
