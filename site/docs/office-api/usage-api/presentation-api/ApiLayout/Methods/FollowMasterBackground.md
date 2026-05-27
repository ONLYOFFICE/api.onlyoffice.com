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

Apply the master's background to a layout in the presentation.

```javascript editor-pptx
// Layouts can inherit background properties from their master.

// The layout background now matches the master's background.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
master.SetBackground(fill);
const layout = master.GetLayout(0);
layout.FollowMasterBackground();
slide.FollowLayoutBackground();
```
