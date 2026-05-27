# SetDisplay

Sets annotation display type.

## Syntax

```javascript
expression.SetDisplay(display);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| display | Required | [DisplayType](../../Enumeration/DisplayType.md) |  | The display type for the annotation. |

## Returns

boolean

## Example

Control the visibility of an annotation in a PDF.

```javascript editor-pdf
// Toggle whether an annotation appears or stays hidden in a PDF.

// Set the display mode to show or conceal an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetDisplay("hidden");
```
