# GetPathCount

Returns the number of paths in the current geometry.

## Syntax

```javascript
expression.GetPathCount();
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count how many drawing paths make up a shape's outline in a spreadsheet.

```javascript editor-xlsx
// How do I find out how many separate path segments a shape contains in a spreadsheet?

// Determine the total number of outline segments that together form a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
let stroke = Api.CreateStroke(18000, Api.CreateSolidFill(Api.RGB(50, 75, 100)));
let shape = worksheet.AddShape("cloud", 60 * 36000, 60 * 36000, fill, stroke, 3, 0, 2, 2);
let geometry = shape.GetGeometry();
worksheet.GetRange("A3").SetValue("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
worksheet.GetRange("A4").SetValue("Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
worksheet.GetRange("A5").SetValue("Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
worksheet.GetRange("A6").SetValue("Total paths: " + paths.length);
```
