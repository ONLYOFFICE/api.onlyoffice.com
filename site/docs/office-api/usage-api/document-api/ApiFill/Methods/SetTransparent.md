# SetTransparent

Sets the transparency of the fill.

## Syntax

```javascript
expression.SetTransparent(transparent);
```

`expression` - A variable that represents an [ApiFill](../ApiFill.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| transparent | Required | number |  | The transparency value, from 0 (fully opaque) to 1 (fully transparent). |

## Returns

boolean

## Example

Make a shape's fill semi-transparent in a document.

```javascript editor-docx
// Adjust how see-through a shape's fill is in a document.

// Fade a shape's solid fill so the content behind it shows through in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
fill.SetTransparent(0.4);
let shape = Api.CreateShape("rect", 50 * 36000, 30 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
```
