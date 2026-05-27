# FollowMasterBackground

Sets the master background as the background of the slide.

## Syntax

```javascript
expression.FollowMasterBackground();
```

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Apply a master slide's background to a slide in a presentation.

```javascript editor-pptx
// How do I use a master slide's background for a slide in a presentation?

// Set the slide's background to match its master slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
layout.SetBackground(fill);
slide.FollowMasterBackground();
```
