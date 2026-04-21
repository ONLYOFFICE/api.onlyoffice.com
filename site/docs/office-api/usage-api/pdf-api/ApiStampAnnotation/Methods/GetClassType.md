# GetClassType

Returns a type of the ApiStampAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"stampAnnot"

## Example

Check the class type returned by a stamp annotation in a PDF document.

```javascript editor-pdf
// How do I check what type a stamp annotation object is in a PDF document?

// Retrieve and output the class type string for a stamp annotation in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);
```
