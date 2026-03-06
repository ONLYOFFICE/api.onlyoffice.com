# SetLoopUntilStopped

Sets whether the presentation loops continuously until the user stops it.

## Syntax

```javascript
expression.SetLoopUntilStopped(loopUntilStopped);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| loopUntilStopped | Required | boolean |  | True to set the presentation to loop until stopped; false otherwise. |

## Returns

boolean

## Example

This example sets the presentation to loop continuously until manually stopped.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const isLooping = presentation.GetLoopUntilStopped();
paragraph.AddText("Loop until stopped initial value: " + isLooping);

presentation.SetLoopUntilStopped(true);
paragraph.AddText("\nLoop until stopped new value: " + presentation.GetLoopUntilStopped());
slide.AddObject(shape);

```
