# SetTitle

Sets the document title.

## Syntax

```javascript
expression.SetTitle(sTitle);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The document title. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the title of the workbook.

```javascript editor-xlsx playground
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetTitle("My Workbook Title");
const title = core.GetTitle();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Title: " + title);

```
