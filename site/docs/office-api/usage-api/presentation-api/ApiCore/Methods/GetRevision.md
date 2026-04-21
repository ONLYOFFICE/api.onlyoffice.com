# GetRevision

Returns the document revision.

## Syntax

```javascript
expression.GetRevision();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Set and get the revision of the current presentation in a presentation.

```javascript editor-pptx
// How can I get the revision using a core properties in a presentation?

// Get the revision for a core properties in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetRevision("Rev. A");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const revision = core.GetRevision();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Revision: " + revision);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
