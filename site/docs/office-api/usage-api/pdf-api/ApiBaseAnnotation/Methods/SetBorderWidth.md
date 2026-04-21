# SetBorderWidth

Sets annotation border width.

## Syntax

```javascript
expression.SetBorderWidth(width);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [pt](../../Enumeration/pt.md) |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set thick border width to it in a PDF document.

```javascript editor-pdf
// How to set border width for an annotation in a PDF document?

// Set border width and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderWidth(2);
```
