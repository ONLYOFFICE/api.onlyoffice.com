# SetRevision

Sets the document revision.

## Syntax

```javascript
expression.SetRevision(sRevision);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRevision | Required | string |  | The document revision. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set and get the revision of the current presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetRevision("Rev. B");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const revision = core.GetRevision();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Revision: " + revision);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
