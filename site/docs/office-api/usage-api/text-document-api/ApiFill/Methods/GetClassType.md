# GetClassType

Returns a type of the ApiFill class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiFill](../ApiFill.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"fill"

## Example

This example gets a class type and inserts it into the document.

```javascript editor-docx
// How get a class type of ApiFill.

// Retrieve class type of a created radial gradient fill and display it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
drawing.SetDistances(914400, 0, 914400, 0);
drawing.SetWrappingStyle("square");
paragraph.AddDrawing(drawing);
let classType = fill.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
