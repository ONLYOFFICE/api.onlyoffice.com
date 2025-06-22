# SetType

Sets the placeholder type.

## Syntax

```javascript
expression.SetType(sType);
```

`expression` - A variable that represents a [ApiPlaceholder](../ApiPlaceholder.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [PlaceholderType](../../Enumeration/PlaceholderType.md) |  | Placeholder type |

## Returns

boolean

## Example

This example sets the placeholder type.

```javascript editor-pptx
// How to set a placeholder type (chart, table, etc.).

// Create a shape and set its placeholder type to "chart".

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const placeholder = Api.CreatePlaceholder("chart");
shape.SetPlaceholder(placeholder);

placeholder.SetType("picture");
slide.AddObject(shape);

```
