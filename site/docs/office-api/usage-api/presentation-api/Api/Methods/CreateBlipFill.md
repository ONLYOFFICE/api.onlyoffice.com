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

This example shows hot to create a blip fill to apply to the object using the selected image as the object background.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateBlipFill("https://api.onlyoffice.com/content/img/docbuilder/examples/icon_DocumentEditors.png", "tile");
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("star10", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oSlide.AddObject(oDrawing);
```
