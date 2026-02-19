# SetBorderEffectStyle

Sets annotation border effect style.\
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

This example creates a square annotation and sets border effect style.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);
```
