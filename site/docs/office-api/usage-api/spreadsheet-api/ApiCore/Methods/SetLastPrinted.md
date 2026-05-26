# SetLastPrinted

Sets the date when the document was last printed.

## Syntax

```javascript
expression.SetLastPrinted(oLastPrinted);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oLastPrinted | Required | Date |  | The date when the document was last printed. |

## Returns

This method doesn't return any data.

## Example

Save the most recent print date of a workbook in its document properties in a spreadsheet.

```javascript editor-xlsx
// How do I log the last time a workbook was printed in a spreadsheet?

// Capture the date a workbook was last sent to the printer and store it in the metadata in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLastPrinted(new Date());
const lastPrintedDate = core.GetLastPrinted().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last printed: " + lastPrintedDate);
```
