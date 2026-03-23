# GetClassType

Returns a type of the ApiBullet class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiBullet](../ApiBullet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"bullet"

## Example

This example gets a type of ApiBullet class and inserts it into the document.

```javascript editor-pptx
// How get a class type of ApiBullet.

// Retrieve class type of ApiBullet object and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const bullet = Api.CreateBullet("-");
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the bulleted paragraph.");

const classType = bullet.GetClassType();
const newParagraph = Api.CreateParagraph();
newParagraph.SetJc("left");
newParagraph.AddText("Class Type = " + classType);
docContent.Push(newParagraph);
slide.AddObject(shape);

```
