# GetClassType

Returns a type of the ApiRedactAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRedactAnnotation](../ApiRedactAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"redactAnnot"

## Example

This example gets class type of redact annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
