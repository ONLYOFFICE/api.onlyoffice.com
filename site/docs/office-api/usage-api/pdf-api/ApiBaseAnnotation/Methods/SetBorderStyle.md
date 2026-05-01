# SetBorderStyle

Sets annotation border style.

## Syntax

```javascript
expression.SetBorderStyle(borderStyle);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderStyle | Required | [AnnotBorderStyle](../../Enumeration/AnnotBorderStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set dashed border to it in a PDF document.

```javascript editor-pdf
// How to set border style for an annotation in a PDF document?

// Set border style and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
