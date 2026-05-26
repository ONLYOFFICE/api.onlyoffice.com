# ToJSON

Converts the ApiGradientStop object into the JSON object.

## Syntax

```javascript
expression.ToJSON();
```

`expression` - A variable that represents a [ApiGradientStop](../ApiGradientStop.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

JSON

## Example

Convert a gradient stop to a JSON representation in a document.

```javascript editor-docx
// How do I serialize a gradient stop into JSON format in a document?

// Restore a gradient stop from its saved JSON data to reuse in a shape fill in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
let json = gs1.ToJSON();
let gs1FromJSON = Api.FromJSON(json);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1FromJSON, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 1908000, 1404000, fill, stroke);
paragraph.AddDrawing(drawing);
```
