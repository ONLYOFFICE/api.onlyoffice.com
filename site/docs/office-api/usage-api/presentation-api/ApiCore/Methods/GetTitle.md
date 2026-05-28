# GetTitle

Returns the document title.

## Syntax

```javascript
expression.GetTitle();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Set and retrieve the title of a presentation in a presentation.

```javascript editor-pptx
// How do I get the title of a presentation in a presentation?

// Retrieve and display the title as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetTitle("My Presentation Title");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const title = core.GetTitle();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Title: " + title);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
