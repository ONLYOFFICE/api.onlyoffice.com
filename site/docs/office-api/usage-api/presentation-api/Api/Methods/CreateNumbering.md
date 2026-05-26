# CreateNumbering

Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter.

## Syntax

```javascript
expression.CreateNumbering(numType, startAt);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| numType | Required | [BulletType](../../Enumeration/BulletType.md) |  | The numbering type the paragraphs will be numbered with. |
| startAt | Required | number |  | The number the first numbered paragraph will start with. |

## Returns

[ApiBullet](../../ApiBullet/ApiBullet.md)

## Example

Create numbered bullets for text in a presentation.

```javascript editor-pptx
// How do I add paragraph numbering to text in a presentation?

// Format text lines with automatic numbering in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const bullet = Api.CreateNumbering("ArabicParenR", 1);
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
paragraph = Api.CreateParagraph();
paragraph.SetBullet(bullet);
paragraph.AddText(" This is an example of the numbered paragraph.");
docContent.Push(paragraph);
slide.AddObject(shape);
```
