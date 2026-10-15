# SetOutlineLvl

Sets the outline level for the specified properties.

Inherited from [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md).

## Syntax

```javascript
expression.SetOutlineLvl(lvl);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lvl | Optional | Number \| null \| undefined |  | The outline level. Possible values: 1-9. The 1 value means the basic outline level. To set no outline level, use this method without a parameter. |

## Returns

boolean

## Example

Set the outline level for paragraph text in a presentation.

```javascript editor-pptx
// How do I assign an outline level to a paragraph in a presentation?

// Configure paragraph hierarchy using outline levels in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgb = Api.RGB(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
slide.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
paragraph.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level (index) set to " + paragraph.GetOutlineLvl());
```
