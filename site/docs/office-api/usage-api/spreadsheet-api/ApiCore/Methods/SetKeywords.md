# SetKeywords

Sets the document keywords.

## Syntax

```javascript
expression.SetKeywords(sKeywords);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKeywords | Required | string |  | The document keywords in the string format. |

## Returns

This method doesn't return any data.

## Example

Add searchable keywords to a workbook's document properties in a spreadsheet.

```javascript editor-xlsx
// How do I attach search tags to a workbook's metadata in a spreadsheet?

// Tag the workbook with descriptive terms that make it easier to find in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetKeywords("Example; ApiCore; Workbook");
const keywords = core.GetKeywords();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
