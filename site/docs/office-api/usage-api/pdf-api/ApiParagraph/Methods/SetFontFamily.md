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

Set the font type for a paragraph in a PDF.

```javascript editor-pdf
// How do I change the font family in a paragraph in a PDF?

// Apply a specific typeface to a paragraph in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("This is a paragraph with the font family set to 'Consolas'.");
paragraph.SetFontFamily('Consolas');
page.AddObject(shape);
```
