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

Create a square annotation and add it to the page.

```javascript editor-pdf
// How do I create the square annot in a PDF document?

// Create the square annot and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
```
