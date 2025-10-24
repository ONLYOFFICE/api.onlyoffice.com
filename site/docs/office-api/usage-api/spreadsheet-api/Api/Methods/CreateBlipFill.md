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

This example creates a blip fill to apply to the object using the selected image as the object background.

```javascript editor-xlsx
// How to set image background to the shape object.

// Create a blip fill from the image to set object background.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 1, 3 * 36000);
```
