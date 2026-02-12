# GetCustomProperties

Returns the workbook custom properties.

## Syntax

```javascript
expression.GetCustomProperties();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## Example

This example demonstrates how to use ApiCustomProperties to configure custom properties in a spreadsheet.

```javascript editor-xlsx playground
const worksheet = Api.GetActiveSheet();

const customProps = Api.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
customProps.Add("MyNumberProperty", 123.450);
customProps.Add("MyDateProperty", new Date("23 November 2023"));
customProps.Add("MyBoolProperty", true);

let stringValue = customProps.Get("MyStringProperty");
let numberValue = customProps.Get("MyNumberProperty");
let dateValue = customProps.Get("MyDateProperty");
let boolValue = customProps.Get("MyBoolProperty");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Custom String Property: " + stringValue + "\n");
paragraph.AddText("Custom Number Property: " + numberValue + "\n");
paragraph.AddText("Custom Date Property: " + dateValue.toDateString() + "\n");
paragraph.AddText("Custom Boolean Property: " + boolValue);

```
