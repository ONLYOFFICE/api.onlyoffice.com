# GetBorderEffectIntensity

Gets annotation border effect intensity.

## Syntax

```javascript
expression.GetBorderEffectIntensity(value);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | Required | number |  | No description provided. |

## Returns

boolean

## Example

Create a square annotation and get its border effect intensity in a PDF document.

```javascript editor-pdf
// How do I get the border effect intensity in a PDF document?

// Get the border effect intensity using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetBorderEffectStyle("cloud");
squareAnnot.SetBorderEffectIntensity(1);

let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border effect intensity is: ${squareAnnot.GetBorderEffectIntensity()}`);
```
