# SetDescription

Sets the document description.

## Syntax

```javascript
expression.SetDescription(sDescription);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescription | Required | string |  | The document description. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the description of the current workbook using the ApiCore.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetDescription("This is a sample workbook made to help fellow users understand how to use the ApiCore methods.");
const description = core.GetDescription();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Description: " + description);

```
