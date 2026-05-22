# SetDescription

Sets the document description.

## Syntax

```javascript
expression.SetDescription(sDescription);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescription | Required | string |  | The document description. |

## Returns

This method doesn't return any data.

## Example

Set and retrieve the description of a presentation in a presentation.

```javascript editor-pptx
// How do I set the description of a presentation in a presentation?

// Retrieve and display the description as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetDescription("This is a sample presentation made to help fellow users understand how to use the ApiCore methods.");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const description = core.GetDescription();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Description: " + description);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
