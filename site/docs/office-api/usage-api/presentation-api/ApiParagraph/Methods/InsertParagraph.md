# InsertParagraph

Inserts a paragraph at the specified position.

## Syntax

```javascript
expression.InsertParagraph(paragraph, sPosition, beRNewPara);
```

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paragraph | Required | string \| [ApiParagraph](../../ApiParagraph/ApiParagraph.md) |  | Text or paragraph. |
| sPosition | Required | string |  | The position where the text or paragraph will be inserted ("before" or "after" the paragraph specified). |
| beRNewPara | Required | boolean |  | Defines if this method returns a new paragraph (true) or the current paragraph (false). |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

This example inserts a paragraph at the specified position.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This paragraph was inserted after the first one.');
paragraph.InsertParagraph(paragraph2, 'after', true);
slide.AddObject(shape);

```
