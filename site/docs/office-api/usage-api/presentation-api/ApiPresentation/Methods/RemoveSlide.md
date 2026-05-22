# RemoveSlide

Removes a slide at the specified position from the presentation.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.RemoveSlide(nIndex);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The zero-based slide index. |

## Returns

boolean

## Example

Delete a single slide from a presentation.

```javascript editor-pptx
// How do I remove a slide at a specific position in a presentation?

// Remove the second slide and display a confirmation message.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
slide1.RemoveAllObjects();

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);

presentation.RemoveSlide(1);

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("The second slide was removed from this presentation.");
slide1.AddObject(shape);
```
