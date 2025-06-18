# SetLastModifiedBy

Sets the name of the user who last modified the document.

## Syntax

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | Required | string |  | The name of the user who last modified the document. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the name of the last user who modified the current workbook.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLastModifiedBy("Mark Pottato");
const lastModifiedBy = core.GetLastModifiedBy();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

```
