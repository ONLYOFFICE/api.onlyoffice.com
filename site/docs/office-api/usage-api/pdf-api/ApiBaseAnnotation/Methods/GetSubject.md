# GetSubject

Gets annotation subject.

## Syntax

```javascript
expression.GetSubject();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example creates a square annotation and gets its subject.

```javascript editor-pdf
let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);

```
