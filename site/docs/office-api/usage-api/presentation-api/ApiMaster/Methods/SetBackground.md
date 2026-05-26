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

Apply a background fill to a slide master.

```javascript editor-pptx
// Create a solid fill with a custom color and set it as the master background.

// Clear any existing background before applying the new fill.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
master.ClearBackground();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);
```
