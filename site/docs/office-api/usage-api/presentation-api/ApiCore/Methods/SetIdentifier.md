# SetIdentifier

Sets the document identifier.

## Syntax

```javascript
expression.SetIdentifier(sIdentifier);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | Required | string |  | The document identifier. |

## Returns

This method doesn't return any data.

## Example

Set and retrieve the identifier of a presentation in a presentation.

```javascript editor-pptx
// How do I set the identifier of a presentation in a presentation?

// Retrieve and display the identifier as text in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetIdentifier("#ID42");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const identifier = core.GetIdentifier();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Identifier: " + identifier);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
