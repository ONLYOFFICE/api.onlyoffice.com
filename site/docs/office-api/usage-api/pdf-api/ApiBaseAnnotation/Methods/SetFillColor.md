# SetFillColor

Sets annotation fill color.

## Syntax

```javascript
expression.SetFillColor(color);
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | color to set fill (omit the argument to set no fill) |

## Returns

boolean

## Example

Set the background color of an annotation in a PDF.

```javascript editor-pdf
// Apply a fill color to make an annotation stand out in a PDF.

// Change the interior color of an annotation in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
squareAnnot.SetFillColor(Api.RGB(255, 0, 0));
```
