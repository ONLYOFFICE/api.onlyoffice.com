# SetVersion

Sets the document version.

## Syntax

```javascript
expression.SetVersion(sVersion);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sVersion | Required | string |  | The document version. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to sets the version of the workbook.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetVersion("v9.0");
const version = core.GetVersion();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Version: " + version);

```
