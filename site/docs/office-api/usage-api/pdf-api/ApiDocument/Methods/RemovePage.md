# RemovePage

Removes page by index from document
💡  You can't delete last page 

## Syntax

```javascript
expression.RemovePage(index);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | page index |

## Returns

boolean

## Example

Delete a page from a PDF.

```javascript editor-pdf
// Remove an unwanted page from a PDF.

// Delete a specific page number from a PDF.

let doc = Api.GetDocument();
doc.AddPage(0);
doc.RemovePage(0);
```
