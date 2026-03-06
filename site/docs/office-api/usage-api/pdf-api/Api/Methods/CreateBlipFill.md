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

This example shows how to create a blip fill to apply to the object using the selected image as the object background.

```javascript editor-pdf
// How to set an image as a background.

// Use blip fill to fill a background with an image.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
