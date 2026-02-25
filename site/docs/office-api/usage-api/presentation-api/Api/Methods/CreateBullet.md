# CreateBullet

Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter.

## Syntax

```javascript
expression.CreateBullet(sSymbol);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSymbol | Required | string |  | The character or symbol which will be used to create the bullet for the paragraph. |

## Returns

[ApiBullet](../../ApiBullet/ApiBullet.md)

## Example

This example show how to create a bullet.

```javascript editor-pptx playground
// How to add a bullet to the paragraph.

// Add bulleted paragraph.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");
slide.AddObject(shape);

```
