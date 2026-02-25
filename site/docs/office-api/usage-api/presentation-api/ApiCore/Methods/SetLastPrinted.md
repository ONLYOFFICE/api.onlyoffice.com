# SetLastPrinted

Sets the date when the document was last printed.

## Syntax

```javascript
expression.SetLastPrinted(oLastPrinted);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLastPrinted | Required | Date |  | The date when the document was last printed. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set and get the date when the current presentation was printed last time.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetLastPrinted(new Date());

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const lastPrintedDate = core.GetLastPrinted().toDateString();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
