# SetModified

Sets the date when the document was last modified.

## Syntax

```javascript
expression.SetModified(oModified);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oModified | Required | Date |  | The date when the document was last modified. |

## Returns

This method doesn't return any data.

## Example

Record the date a workbook was last changed in its document properties in a spreadsheet.

```javascript editor-xlsx
// How do I write a custom last-modified date into a workbook's metadata in a spreadsheet?

// Update the modification timestamp stored in the workbook so the history reflects a specific date in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetModified(new Date("10 March 1990"));
const lastModifiedDate = core.GetModified().toDateString();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
```
