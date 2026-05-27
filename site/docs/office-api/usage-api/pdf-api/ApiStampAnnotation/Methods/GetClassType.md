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

Learn what kind of stamp was added to a PDF.

```javascript editor-pdf
// How do I check the stamp annotation category in a PDF?

// Determine the specific stamp type used in a PDF.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'SB_Approved');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Annot class type is: ${stampAnnot.GetClassType()}`);
```
