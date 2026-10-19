# SetFontFamily

Sets all 4 font slots with the specified font family.

## Syntax

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | Optional | string \| null |  | The font family or families used for the current paragraph. Pass *null* or omit it to remove the font family. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null \| undefined

## Example

Change the font typeface for paragraph text in a presentation.

```javascript editor-pptx
// How do I set the font family for a paragraph in a presentation?

// Apply a specific font typeface to all text in a paragraph in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily('Consolas');
slide.AddObject(shape);
```
