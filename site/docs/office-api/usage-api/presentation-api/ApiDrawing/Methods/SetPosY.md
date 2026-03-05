# SetPosY

Sets the y position of the drawing on the slide.

## Syntax

```javascript
expression.SetPosY(posY);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posY | Required | [EMU](../../Enumeration/EMU.md) |  | The distance from the top side of the slide to the upper side of the drawing measured in English measure units. |

## Returns

boolean

## Example

This example sets the y position of the drawing on the slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(176, 196, 222));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosY(Api.MillimetersToEmus(60));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Y position was changed to 60 mm.');

```
