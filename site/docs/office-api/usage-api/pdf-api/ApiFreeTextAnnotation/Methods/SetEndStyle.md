# SetEndStyle

Sets a line end style.

## Syntax

```javascript
expression.SetEndStyle(style);
```

`expression` - A variable that represents an [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| style | Required | [LineEndStyle](../../Enumeration/LineEndStyle.md) |  | The style of the polyline end endpoint. |

## Returns

boolean

## Example

Set the ending style of a callout line in a PDF.

```javascript editor-pdf
// Customize the endpoint marker of a free text callout annotation.

// Apply a square line ending and verify the resulting style.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
freeTextAnnot.SetEndStyle("square");
console.log(`End style set to: ${freeTextAnnot.GetEndStyle()}`);
```
