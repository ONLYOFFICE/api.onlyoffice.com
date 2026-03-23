# CreateSquareAnnot

Creates square annotation.

## Syntax

```javascript
expression.CreateSquareAnnot(rect);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rect | Required | [Rect](../../Enumeration/Rect.md) |  | annotation rect. |

## Returns

[ApiSquareAnnotation](../../ApiSquareAnnotation/ApiSquareAnnotation.md)

## Example

This example creates a square annotation and adds it to the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);

```
