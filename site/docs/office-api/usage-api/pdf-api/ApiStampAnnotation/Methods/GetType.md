# GetType

Gets stamp type.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[StampType](../../Enumeration/StampType.md)

## Example

Find out the category of a stamp annotation in a PDF

```javascript editor-pdf
// What kind of stamp annotation is being used in a PDF?

// Look up and print the identifier type assigned to a stamp annotation in a PDF

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`Stamp type is: ${stampAnnot.GetType()}`);
```
