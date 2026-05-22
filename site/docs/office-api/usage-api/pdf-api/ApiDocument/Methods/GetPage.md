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

Access a single page from a PDF.

```javascript editor-pdf
// How do I work with a specific page in a PDF?

// Retrieve a page and rotate it in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
