# GetClassType

Returns a type of the ApiTextAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTextAnnotation](../ApiTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"textAnnot"

## Example

This example gets class type of text annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let textAnnot = Api.CreateTextAnnot([10, 10, 20, 20]);
let classType = textAnnot.GetClassType();
textAnnot.SetContents(classType);
let page = doc.GetPage(0);
page.AddObject(textAnnot);
console.log(`Annot class type is: ${classType}`);
```
