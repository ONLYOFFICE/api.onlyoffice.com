# SetOutlineLvl

Sets the outline level for the specified properties.

## Syntax

```javascript
expression.SetOutlineLvl(nLvl);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLvl | Optional | Number |  | The outline level. Possible values: 1-9. The 1The desired functionality is as follows: When inserting document A into document B using the merge document API during editing, the source of document A should be visible within document B. By clicking or hovering over the inserted content of document A in document B, information about the insertion of document A should be displayed in a pop-up/floating window, preserving the boundaries of document A. Document A should be able to be inserted between any two characters in document B. To set no outline level, use this method without a parameter. |

## Returns

boolean

## Example

This example sets the outline level for the specified paragraph via paragraph properties.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const rgb = Api.CreateRGBColor(50, 100, 150);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 200 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(10 * 36000, 10 * 36000);
slide.AddObject(shape);

const outlineLvlIndex = 8;

const content = shape.GetDocContent();
const paragraph = content.GetElement(0);
const paraPr = paragraph.GetParaPr();
paraPr.SetOutlineLvl(outlineLvlIndex);
paragraph.AddText("This is a paragraph with outline level parameter set to " + (outlineLvlIndex + 1));

```
