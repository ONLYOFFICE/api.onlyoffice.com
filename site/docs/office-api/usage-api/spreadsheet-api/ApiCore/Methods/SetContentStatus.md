# SetContentStatus

Sets the document content status.

## Syntax

```javascript
expression.SetContentStatus(sStatus);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sStatus | Required | string |  | The document content status. |

## Returns

This method doesn't return any data.

## Example

Record a content status value in the workbook document properties in a spreadsheet.

```javascript editor-xlsx
// How do I mark the content status of a workbook in a spreadsheet?

// Save a status label such as "Final" or "Draft" in the file metadata in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();
core.SetContentStatus("Final");
const contentStatus = core.GetContentStatus();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
```
