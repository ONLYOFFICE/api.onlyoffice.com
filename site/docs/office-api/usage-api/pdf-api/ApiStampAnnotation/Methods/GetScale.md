# GetScale

Gets stamp size scale.

## Syntax

```javascript
expression.GetScale();
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Retrieve the scale value of a stamp annotation in a PDF

```javascript editor-pdf
// What is the current size setting for a stamp annotation in a PDF?

// Display the scale measurement retrieved from a stamp annotation in a PDF

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
