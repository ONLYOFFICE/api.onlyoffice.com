# ThemeColor

Creates a theme color.

## Syntax

```javascript
expression.ThemeColor(name);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Optional | [SchemeColorId](../../Enumeration/SchemeColorId.md) | "tx1" | The theme color name. If the provided name is not supported, the 'tx1' color will be used. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

This example shows how to create a theme color and use it as a shape fill.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.ThemeColor('accent6');
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(0, 0, 0)));
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

```
