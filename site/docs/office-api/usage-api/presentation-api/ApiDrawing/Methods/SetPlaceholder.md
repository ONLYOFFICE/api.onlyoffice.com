# SetPlaceholder

Sets the specified placeholder to the current drawing object.

## Syntax

```javascript
expression.SetPlaceholder(oPlaceholder);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oPlaceholder | Required | [ApiPlaceholder](../../ApiPlaceholder/ApiPlaceholder.md) |  | Placeholder object. |

## Returns

boolean

## Example

This example sets a placeholder for the shape.

```javascript editor-pptx
// How to set a placeholder for a shape.

// Select a shape object from a slide and change its placeholder.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const placeholder = Api.CreatePlaceholder("picture");
shape.SetPlaceholder(placeholder);
slide.AddObject(shape);

```
