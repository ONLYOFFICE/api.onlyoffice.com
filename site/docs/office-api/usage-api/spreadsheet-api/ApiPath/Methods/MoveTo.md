# MoveTo

Moves the current path to the specified coordinates.

## Syntax

```javascript
expression.MoveTo(x, y);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| x | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The X coordinate. |
| y | Required | [GeometryCoordinate](../../Enumeration/GeometryCoordinate.md) |  | The Y coordinate. |

## Returns

This method doesn't return any data.

## Example

Place the drawing cursor at a specific starting point before tracing a custom shape in a spreadsheet.

```javascript editor-xlsx
// How do I set the starting point for a custom shape path in a spreadsheet?

// Position the pen at a chosen coordinate to begin building a new path outline in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let customGeometry = Api.CreateCustomGeometry();
let path = customGeometry.AddPath();
path.SetWidth(100 * 36000);
path.SetHeight(100 * 36000);
path.SetStroke(true);
path.SetFill("norm");
path.MoveTo(50 * 36000, 0);
path.LineTo(70 * 36000, 45 * 36000);
path.LineTo(55 * 36000, 70 * 36000);
path.LineTo(100 * 36000, 100 * 36000);
path.LineTo(0, 100 * 36000);
path.Close();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("rect", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
shape.SetGeometry(customGeometry);
```
