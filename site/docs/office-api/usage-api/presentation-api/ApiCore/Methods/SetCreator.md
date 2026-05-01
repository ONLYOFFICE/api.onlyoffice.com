# SetCreator

Sets the document author.

## Syntax

```javascript
expression.SetCreator(sCreator);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCreator | Required | string |  | The document author. |

## Returns

This method doesn't return any data.

## Example

Set and get the creator of the current presentation using the core properties in a presentation.

```javascript editor-pptx
// How do I set creator in a presentation?

// Set creator using a core properties object in a presentation.

const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetCreator("John Smith");

const fill = Api.CreateSolidFill(Api.RGB(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const creator = core.GetCreator();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Creator: " + creator);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);
```
