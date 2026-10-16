# SetName

Sets the name of the current drawing. If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name. OLE objects do not support a custom name, so for them this method always returns false.

## Syntax

```javascript
expression.SetName(name);
```

`expression` - A variable that represents an [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name which will be set to the current drawing. |

## Returns

boolean

## Example

Assign a name to a shape on a page in a PDF form.

```javascript editor-pdf
// Give a page shape a recognizable name so tools can reference it.

// Create a shape, assign a name, and display the applied name inside it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("CustomShapeName");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Shape name was set to: " + shape.GetName());
```
