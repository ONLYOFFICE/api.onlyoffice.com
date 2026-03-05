# CreateStroke

Creates a stroke adding shadows to the element.

## Syntax

```javascript
expression.CreateStroke(width, fill, sDash);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The width of the shadow measured in English measure units. |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to create the shadow. |
| sDash | Optional | [DashType](../../Enumeration/DashType.md) | "solid" | The type of line dash. |

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

## Example

This example shows how to create a stroke.

```javascript editor-docx
// Create a stroke using the specified width and fill and apply it to the shape from the first paragraph.

// How to create the ApiStroke object and use it to create the ApiShape object.

// Specifies the parameters of the shape stroke.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
let stroke = Api.CreateStroke(5 * 36000, Api.CreateSolidFill(Api.RGB(255, 111, 61)));
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
