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

Create a freeText annotation and add it to the page.

```javascript editor-pdf
// How do I create the free text annot in a PDF document?

// Create the free text annot and display the result in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
```
