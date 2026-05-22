# GetContentStatus

Returns the document content status.

## Syntax

```javascript
expression.GetContentStatus();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the content status from the presentation's metadata in a presentation.

```javascript editor-pptx
// How do I check what content status is set for a presentation in a presentation?

// Retrieve and display the content status value stored in core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetContentStatus("Final");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const contentStatus = core.GetContentStatus();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
