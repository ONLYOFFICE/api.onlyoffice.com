# SetBorderEffectStyle

Sets annotation border effect style.
💡  Can be applied to circle, square, freeText and polygon annotations 

## Syntax

```javascript
expression.SetBorderEffectStyle(style);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [AnnotBorderEffectStyle](../../Enumeration/AnnotBorderEffectStyle.md) |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and set border effect style in a PDF document.

```javascript editor-pdf
// How do I set border effect style in a PDF document?

// Set border effect style using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
