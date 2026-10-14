# CreateShadow

Creates a shadow which can be applied to a graphic object.

## Syntax

```javascript
expression.CreateShadow(settings);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| settings | Required | [ShadowSettings](../../Enumeration/ShadowSettings.md) |  | The shadow properties. |

## Returns

[ApiShadow](../../ApiShadow/ApiShadow.md)

## Example

Create a shadow and apply it to a shape in a presentation.

```javascript editor-pptx
// Build an outer shadow with a color, transparency and offset, then attach it to a drawing.

// Create a shape, create the shadow via Api.CreateShadow, and apply it with SetShadow.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(40 * 36000, 40 * 36000);
slide.AddObject(shape);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
```
