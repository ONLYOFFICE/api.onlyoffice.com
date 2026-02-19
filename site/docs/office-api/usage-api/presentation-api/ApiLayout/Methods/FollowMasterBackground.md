# FollowMasterBackground

Sets the master background as the background of the layout.

## Syntax

```javascript
expression.FollowMasterBackground();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example sets the master background as the background of the layout.

```javascript editor-pptx
// How to apply master background to the layout.

// Change background of the presentation layout to the background of a master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);
const layout = master.GetLayout(0);
layout.FollowMasterBackground();
slide.FollowLayoutBackground();

```
