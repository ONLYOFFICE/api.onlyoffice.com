# CreateSlideShowTransition

Creates a new slide show transition object.

## Syntax

```javascript
expression.CreateSlideShowTransition();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSlideShowTransition](../../ApiSlideShowTransition/ApiSlideShowTransition.md)

## Example

Add a transition effect to a slide with automatic timing in a presentation.

```javascript editor-pptx
// How do I make a slide advance automatically in a presentation?

// Configure a slide to transition after a set delay with a specific animation effect in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const fill = Api.CreateSolidFill(Api.RGB(250, 180, 100));
slide.SetBackground(fill);

const transition = Api.CreateSlideShowTransition();
transition.SetEntryEffect('effectSplitVerticalIn');
transition.SetSpeed('medium');
transition.SetAdvanceOnTime(true);
transition.SetAdvanceTime(3000);

slide.SetSlideShowTransition(transition);
```
