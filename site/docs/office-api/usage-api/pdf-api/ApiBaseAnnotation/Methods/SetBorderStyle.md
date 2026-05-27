# SetBorderStyle

Sets annotation border style.

## Syntax

```javascript
expression.SetBorderStyle(borderStyle);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| borderStyle | Required | [AnnotBorderStyle](../../Enumeration/AnnotBorderStyle.md) |  | The border style: **"solid"** or **"dashed"**. |

## Returns

boolean

## Example

Set the border style of an annotation in a PDF.

```javascript editor-pdf
// Should an annotation border be solid, dashed, or have another pattern in a PDF?

// Apply a border style pattern to an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
