# CreateFreeTextAnnot

Creates freeText annotation.

## Syntax

```javascript
expression.CreateFreeTextAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |

## Returns

[ApiFreeTextAnnotation](../../ApiFreeTextAnnotation/ApiFreeTextAnnotation.md)

## Example

This example creates a freeText annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);

```
