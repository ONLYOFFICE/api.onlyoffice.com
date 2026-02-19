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

This example gets first page and sets rotate.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetRotation(90);
```
