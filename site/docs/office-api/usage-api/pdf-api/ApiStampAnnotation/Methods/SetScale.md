# SetScale

Sets stamp size scale.

## Syntax

```javascript
expression.SetScale(scale);
```

`expression` - A variable that represents a [ApiStampAnnotation](../ApiStampAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| scale | Required | number |  | size scale |

## Returns

boolean

## Example

Adjust the size of a stamp annotation in a PDF

```javascript editor-pdf
// What size options are available for a stamp annotation in a PDF?

// Modify the scale percentage for a stamp annotation in a PDF

let doc = Api.GetDocument();
let stampAnnot = Api.CreateStampAnnot([10, 10, 0, 0], 'D_Reviewed', 'Joe Doe');
stampAnnot.SetScale(0.5);
let page = doc.GetPage(0);
page.AddObject(stampAnnot);
console.log(`We set scale: ${stampAnnot.GetType()} for stamp annotation`);
```
