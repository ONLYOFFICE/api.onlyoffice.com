# SetBackground

Sets the background to the current slide master.

## Syntax

```javascript
expression.SetBackground(oApiFill);
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The color or pattern used to fill the presentation slide master background. |

## Returns

boolean

## Example

This example sets the background to the current slide master.

```javascript editor-pptx
// How to set a background of a slide master.

// Create a solid fill and apply it as a background for a slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.ClearBackground();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);

```
