# MergeShapes

Merges an array of drawings into new shapes. The resulting shapes take the formatting of the first drawing in the array.

:::note
In the spreadsheet editor, this method is not supported in the document builder and works only in the editor.
:::

## Syntax

```javascript
expression.MergeShapes(drawings, operation);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| drawings | Required | [Drawing](../../Enumeration/Drawing.md)[] |  | An array of at least two drawings from the same page, slide or sheet. At least one of them must be a shape. |
| operation | Required | [ShapesMergeOperation](../../Enumeration/ShapesMergeOperation.md) |  | The merge operation. |

## Returns

[Drawing](../../Enumeration/Drawing.md)[] \| null

## Example

Merge two overlapping shapes into a single shape in a document.

```javascript editor-docx
// Build a custom shape from simple shapes with the union operation.

// Unite a rectangle and an ellipse into one shape filled with the color of the rectangle.

let doc = Api.GetDocument();
let fill1 = Api.CreateSolidFill(Api.Color(255, 111, 61));
let fill2 = Api.CreateSolidFill(Api.Color(51, 51, 51));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let rectangle = Api.CreateShape("rect", 60 * 36000, 40 * 36000, fill1, stroke);
let ellipse = Api.CreateShape("ellipse", 40 * 36000, 40 * 36000, fill2, stroke);
doc.AddDrawingToPage(rectangle, 0, 30 * 36000, 40 * 36000);
doc.AddDrawingToPage(ellipse, 0, 70 * 36000, 40 * 36000);
Api.MergeShapes([rectangle, ellipse], "union");
```
