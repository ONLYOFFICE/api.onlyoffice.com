# GetDashPattern

Gets annotation dash pattern.

## Syntax

```javascript
expression.GetDashPattern();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number[]

## Example

This example creates a square annotation and gets its dash pattern.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation dash pattern is: ${squareAnnot.GetDashPattern()}`);

```
