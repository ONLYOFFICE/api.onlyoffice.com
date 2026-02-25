# Get

Returns the value of a custom property by its name.

## Syntax

```javascript
expression.Get(name);
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The custom property name. |

## Returns

string \| number \| Date \| boolean \| null

## Example

This example demonstrates how to get the value of a custom property by its name.

```javascript editor-xlsx playground
const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();

customProps.Add("ExistingProp", "#123456");

const existingProp = customProps.Get("ExistingProp");
const nonExistentProp = customProps.Get("NonExistentProp");

let fill = Api.CreateSolidFill(Api.CreateRGBColor(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 50 * 36000,
	fill, stroke,
	0, 0, 5, 0
);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("Existing Property Value: " + existingProp);
paragraph.AddText("\nNon-Existent Property Value: " + nonExistentProp);

```
