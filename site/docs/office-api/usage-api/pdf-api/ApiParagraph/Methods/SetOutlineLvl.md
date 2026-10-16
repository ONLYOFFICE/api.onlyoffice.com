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

Set the heading level for a paragraph in a PDF.

```javascript editor-pdf
// How do I create outline structure for document navigation in a PDF?

// Organize text hierarchy by assigning document outline levels in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const rgb = Api.RGB(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
page.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level (index) set to " + paragraph.GetOutlineLvl());
```
