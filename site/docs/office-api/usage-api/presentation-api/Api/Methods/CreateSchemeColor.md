# CreateSchemeColor

Creates a complex color scheme selecting from one of the available schemes.

## Syntax

```javascript
expression.CreateSchemeColor(schemeColorId);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| schemeColorId | Required | [SchemeColorId](../../Enumeration/SchemeColorId.md) |  | The color scheme identifier. |

## Returns

[ApiSchemeColor](../../ApiSchemeColor/ApiSchemeColor.md)

## Example

Create a scheme color with the 'dk1' identifier in a presentation.

```javascript editor-pptx
// How to create a new scheme color in a presentation.

// Add a scheme color to create a solid fill in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const schemeColor = Api.CreateSchemeColor("dk1");
const fill = Api.CreateSolidFill(schemeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("curvedUpArrow", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
