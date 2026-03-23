# SetPosX

Sets the x position of the drawing on the slide.

## Syntax

```javascript
expression.SetPosX(posX);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the left side of the slide to the left side of the drawing measured in English measure units. |

## Returns

boolean

## Example

This example sets the x position of the drawing on the slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#F0D9B5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosX(Api.MillimetersToEmus(50));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('X position was changed to 50 mm.');

```
