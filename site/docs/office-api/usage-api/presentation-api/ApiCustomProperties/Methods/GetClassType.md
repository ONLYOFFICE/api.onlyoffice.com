# GetClassType

Returns a type of the ApiCustomProperties class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customProperties"

## Example

This example demonstrates how to get the class type of ApiCustomProperties.

```javascript editor-pptx playground
const presentation = Api.GetPresentation();
const customProps = presentation.GetCustomProperties();
const classType = customProps.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(150, 200, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 300 * 36000, 100 * 36000, fill, stroke);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(shape);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);

```
