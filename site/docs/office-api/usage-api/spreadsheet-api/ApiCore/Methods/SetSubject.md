# SetSubject

Sets the document subject.

## Syntax

```javascript
expression.SetSubject(sSubject);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSubject | Required | string |  | The document subject. |

## Returns

This method doesn't return any data.

## Example

Define the subject of a workbook by writing it to the document properties in a spreadsheet.

```javascript editor-xlsx
// How do I set a subject line for a workbook's metadata in a spreadsheet?

// Categorize the workbook's content by assigning it a subject in the document properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetSubject("ApiCore Method Showcase");
const subject = core.GetSubject();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Subject: " + subject);
```
