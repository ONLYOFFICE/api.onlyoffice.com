# GetAttribute

Retrieves the attribute value from the custom XML node.
If the attribute doesn't exist, it returns `false`.

## Syntax

```javascript
expression.GetAttribute(name);
```

`expression` - A variable that represents a [ApiCustomXmlNode](../ApiCustomXmlNode.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the attribute to retrieve. |

## Returns

string \| null

## Example

This example shows how to get an attribute value from a custom XML node.

```javascript editor-pptx playground
// How to get an attribute from an XML node.

// Get an XML node attribute.

let presentation = Api.GetPresentation();
let xmlManager = presentation.GetCustomXmlParts();
let xml = xmlManager.Add("<product id='123' name='Laptop' price='999'></product>");
let productNode = xml.GetNodes('/product')[0];
let id = productNode.GetAttribute("id");
let name = productNode.GetAttribute("name");
let price = productNode.GetAttribute("price");
let slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
let docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
let displayText = "Product ID: " + id + "\nProduct Name: " + name + "\nProduct Price: " + price;
run.AddText(displayText);
paragraph.AddElement(run);
slide.AddObject(shape);
```
