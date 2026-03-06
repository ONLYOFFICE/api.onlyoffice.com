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

This example shows how to remove page from document.

```javascript editor-pdf
let doc = Api.GetDocument();
doc.AddPage(1);
doc.RemovePage(0);
```
