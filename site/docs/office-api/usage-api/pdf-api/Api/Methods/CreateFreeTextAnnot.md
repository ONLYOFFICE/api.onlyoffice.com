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

Add a text box annotation to a PDF.

```javascript editor-pdf
// How do I add a free text annotation in a PDF?

// Display a note with text content in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
```
