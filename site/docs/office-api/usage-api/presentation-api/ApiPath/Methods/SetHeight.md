# SetHeight

Sets the height to the current path.

## Syntax

```javascript
expression.SetHeight(nHeight);
```

`expression` - A variable that represents a [ApiPath](../ApiPath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nHeight | Required | number |  | The path height in EMU. |

## Returns

This method doesn't return any data.

## Example

Creates a custom shape and adds it to a slide.

```javascript editor-pptx playground
// Applies custom geometry with specific fill and stroke properties.
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);
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
let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.CreateRGBColor(50, 75, 100)));
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
shape.SetGeometry(customGeometry);
shape.SetPosition(2000000, 1000000);
slide.AddObject(shape);
```
