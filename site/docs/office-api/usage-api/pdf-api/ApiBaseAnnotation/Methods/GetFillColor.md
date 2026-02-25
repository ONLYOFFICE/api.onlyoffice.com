# GetFillColor

Gets annotation fill color.

## Syntax

```javascript
expression.GetFillColor();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example creates a square annotation and gets its fill color.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation fill color is: ${squareAnnot.GetFillColor()}`);

```
