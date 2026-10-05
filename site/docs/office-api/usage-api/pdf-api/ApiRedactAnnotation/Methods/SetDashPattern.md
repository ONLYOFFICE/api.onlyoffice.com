# SetDashPattern

Sets annotation dash pattern.

:::note
The border style must be set to `"dashed"` using the [ApiBaseAnnotation#SetBorderStyle](../../ApiBaseAnnotation/Methods/SetBorderStyle.md) method.
:::

Inherited from [ApiBaseAnnotation.SetDashPattern](../../ApiBaseAnnotation/Methods/SetDashPattern.md).

## Syntax

```javascript
expression.SetDashPattern(pattern);
```

`expression` - A variable that represents an [ApiRedactAnnotation](../ApiRedactAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pattern | Required | number[] |  | A dash array defining a pattern of dashes and gaps to be used in drawing a dashed border. For example, a value of [3, 2] specifies a border drawn with 3-point dashes alternating with 2-point gaps. |

## Returns

boolean

## Example

Apply a dashed border style to an annotation in a PDF.

```javascript editor-pdf
// Create a dotted line effect on an annotation's border in a PDF.

// Define the dash pattern for an annotation's outline in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetBorderStyle("dashed");
squareAnnot.SetDashPattern([8, 4, 4, 4]);
```
