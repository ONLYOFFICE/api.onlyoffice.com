# Fill

Sets the fill formatting properties to the current graphic object.

Inherited from [ApiDrawing.Fill](../../ApiDrawing/Methods/Fill.md).

## Syntax

```javascript
expression.Fill(fill);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the graphic object. |

## Returns

boolean

## Example

Apply a gradient fill to a shape on a page in a PDF form.

```javascript editor-pdf
// Fill a shape with a radial gradient using the drawing's fill setter.

// Create a shape, build a two-stop radial gradient, and apply it with Fill.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const gradientFill = Api.CreateRadialGradientFill([gs1, gs2]);
shape.Fill(gradientFill);
```
