# SetContentStatus

Sets the document content status.

## Syntax

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | Required | string |  | The document content status. |

## Returns

This method doesn't return any data.

## Example

Set and retrieve the content status of a presentation in a presentation.

```javascript editor-pptx
// How do I set the content status of a presentation in a presentation?

// Retrieve and display the content status as text in a presentation.

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
