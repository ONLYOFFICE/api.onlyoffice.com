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

Get scale of stamp annotation in a PDF document.

```javascript editor-pdf
// How to get the scale for a stamp annotation in a PDF document?

// Get the scale and display the result in a PDF document.

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
