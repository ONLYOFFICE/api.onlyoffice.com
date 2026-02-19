# GetClassType

Returns the type of the ApiNotesPage class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiNotesPage](../ApiNotesPage.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"notesPage"

## Example

This example shows how to get the class type of ApiNotesPage.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const notesPage = slide.GetNotesPage();
const classType = notesPage.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 30 * 36000);
slide.AddObject(shape);

const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText('Class type of ApiNotesPage: ' + classType);

```
