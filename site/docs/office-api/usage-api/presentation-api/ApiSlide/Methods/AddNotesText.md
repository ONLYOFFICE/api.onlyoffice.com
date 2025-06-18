# AddNotesText

Adds a text to the notes page of the current slide.

## Syntax

```javascript
expression.AddNotesText(sText);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The text to be added to the notes page. |

## Returns

boolean

## Example

This example shows how to add text to the notes page of a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 150 * 36000, fill, stroke);
shape.SetPosition(0, 3 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

const isNotesAdded = slide.AddNotesText('This is a note added using AddNotesText method');
if (isNotesAdded) {
	paragraph.AddText("Notes were successfully added to the slide.");
} else {
	paragraph.AddText("Failed to add notes.");
}

slide.AddObject(shape);

```
