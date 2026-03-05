# GetBorderWidth

Gets annotation border width.

## Syntax

```javascript
expression.GetBorderWidth();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

This example creates a square annotation and gets its border width.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);

```
