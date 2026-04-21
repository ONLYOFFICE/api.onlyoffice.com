# CreateBlipFill

Creates a blip fill to apply to the object using the selected image as the object background.

## Syntax

```javascript
expression.CreateBlipFill(imageUrl, blipFillType);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | Required | string |  | The path to the image used for the blip fill (currently only internet URL or Base64 encoded images are supported). |
| blipFillType | Required | [BlipFillType](../../Enumeration/BlipFillType.md) |  | The type of the fill used for the blip fill (tile or stretch). |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

Create a blip fill to apply to the object using the selected image as the object background in a document.

```javascript editor-docx
// A shape with the "star10" type uses a tiled blip fill as its background.

// Create a blip fill with the specified image url and the "tile" fill type and use it to fill the created shape in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("star10", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);
```
