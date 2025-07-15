# SetCreated

Sets the document creation date.

## Syntax

```javascript
expression.SetCreated(oCreated);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCreated | Required | Date |  | The document creation date. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the creation date of the workbook using the ApiCore.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetCreated(new Date('20 January 2000'));
const createdDate = core.GetCreated().toDateString();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Created: " + createdDate);

```
