# AddBodyShapeText

Adds a text to the body shape of the current notes page.

## Syntax

```javascript
expression.AddBodyShapeText(sText);
```

`expression` - A variable that represents a [ApiNotesPage](../ApiNotesPage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text to be added to the body shape. |

## Returns

boolean

## Example

This example shows how to add text to the body shape of the notes page.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const notesPage = slide.GetNotesPage();
slide.RemoveAllObjects();

let isAdded = false;
if (notesPage) {
	isAdded = notesPage.AddBodyShapeText('This text was added using AddBodyShapeText method');
}

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

if (isAdded) {
	paragraph.AddText('Text was successfully added to the body shape.');
} else {
	paragraph.AddText('Failed to add text to the body shape.');
}

slide.AddObject(shape);

```
