# SetTitle

Sets the document title.

## Syntax

```javascript
expression.SetTitle(sTitle);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The document title. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set and get the title of the current presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetTitle("My Presentation Title");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const title = core.GetTitle();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Title: " + title);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
