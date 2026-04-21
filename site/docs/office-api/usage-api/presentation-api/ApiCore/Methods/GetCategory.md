# GetCategory

Returns the document category.

## Syntax

```javascript
expression.GetCategory();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the category of the presentation using the core properties in a presentation.

```javascript editor-pptx
// How can I get the category using a core properties in a presentation?

// Get the category for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCategory("Examples");

const fill = Api.CreateSolidFill(Api.RGB(200, 50, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 100 * 36000, fill, stroke);
shape.SetPosition(0, 0);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const category = core.GetCategory();
paragraph.AddText("Category: " + category);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
