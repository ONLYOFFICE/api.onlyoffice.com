# SetRevision

Sets the document revision.

## Syntax

```javascript
expression.SetRevision(sRevision);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRevision | Required | string |  | The document revision. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the revision of the workbook.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetRevision("Rev. A");
const revision = core.GetRevision();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Revision: " + revision);

```
