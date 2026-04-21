# GetPage

Gets page by index from document.

## Syntax

```javascript
expression.GetPage(nPos);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | page position |

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

Get first page and set rotate.

```javascript editor-pdf
// How to get the page for a document?

// Get the page and display the result in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
