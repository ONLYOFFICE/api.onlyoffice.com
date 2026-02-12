# GetPath

Returns a geometry path by its index.

## Syntax

```javascript
expression.GetPath(nIndex);
```

`expression` - A variable that represents a [ApiGeometry](../ApiGeometry.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The path index. |

## Returns

[ApiPath](../../ApiPath/ApiPath.md)

## Example

Analyzes path properties of a cloud shape.

```javascript editor-docx playground
// Retrieves and displays path dimensions, stroke and fill information.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(200, 100, 0)));
let shape = Api.CreateShape("cloud", 80 * 36000, 80 * 36000, fill, stroke);
let geometry = shape.GetGeometry();
paragraph.AddText("Path count: " + geometry.GetPathCount());
let path = geometry.GetPath(0);
paragraph.AddText(", Width: " + path.GetWidth() + ", Height: " + path.GetHeight());
paragraph.AddText(", Stroke: " + path.GetStroke() + ", Fill: " + path.GetFill());
let paths = geometry.GetPaths();
paragraph.AddText(", Total paths: " + paths.length);
paragraph.AddDrawing(shape);
```
