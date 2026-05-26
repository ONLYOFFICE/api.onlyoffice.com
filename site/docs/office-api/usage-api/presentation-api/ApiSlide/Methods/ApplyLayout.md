# ApplyLayout

Applies the specified layout to the current slide.
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

Apply a predefined layout from the slide master to the current slide.

```javascript editor-pptx
// Retrieve the master slide and select a specific layout by index.

// Set the layout to the slide using the master's layout definition.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(4);
slide.ApplyLayout(layout);
```
