# ToJSON

Converts the ApiDrawing object into the JSON object.

## Syntax

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | Required | boolean |  | Specifies if the used numberings will be written to the JSON object or not. |
| bWriteStyles | Required | boolean |  | Specifies if the used styles will be written to the JSON object or not. |

## Returns

JSON

## Example

Serialize a drawing to JSON and restore it as a new shape in a document.

```javascript editor-docx
// How do I convert a drawing object to JSON in a document?

// Duplicate a shape by exporting it to JSON and rebuilding it from that data in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.RGB(255, 224, 204), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 164, 101), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
let json = drawing.ToJSON(false, true);
let drawingFromJSON = Api.FromJSON(json);
paragraph.AddDrawing(drawingFromJSON);
```
