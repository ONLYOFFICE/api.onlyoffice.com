# GetSubject

Returns the document subject.

## Syntax

```javascript
expression.GetSubject();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates how to set and get the subject of the current presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const core = presentation.GetCore();
core.SetSubject("ApiCore Method Showcase");

const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 150 * 36000, fill, stroke);

const subject = core.GetSubject();
const paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Subject: " + subject);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
