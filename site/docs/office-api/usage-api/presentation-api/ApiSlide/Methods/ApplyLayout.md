# ApplyLayout

Applies the specified layout to the current slide.\
The layout must be in slide master.

## Syntax

```javascript
expression.ApplyLayout(oLayout);
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLayout | Required | [ApiLayout](../../ApiLayout/ApiLayout.md) |  | Layout to be applied. |

## Returns

boolean

## Example

This example applies the specified layout to the slide. The layout must be in slide master.

```javascript editor-pptx
// How to apply a layout to the slide.

// Get a layout from the presentation master using its index and apply it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(4);
slide.ApplyLayout(layout);

```
