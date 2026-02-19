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

This example creates a slide show transition

```javascript editor-pptx
// with fade effect that starts after 3 seconds.

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
