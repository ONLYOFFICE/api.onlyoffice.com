# SetFill

Sets the fill type to the current path.

## Syntax

```javascript
expression.SetFill(sFill);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFill | Required | [PathFillType](../../Enumeration/PathFillType.md) |  | The path fill type. |

## Returns

This method doesn't return any data.

## Example

Apply a fill color inside a shape path in a PDF.

```javascript editor-pdf
// Color the interior of a shape in a PDF.

// Enable shading for a custom drawn shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(50 * 36000);
path.SetHeight(50 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(50 * 36000, 50 * 36000);
path.LineTo(0, 50 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
page.AddObject(shape);
```
