# SetLanguage

Sets the document language.

## Syntax

```javascript
expression.SetLanguage(sLanguage);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLanguage | Required | string |  | The document language. |

## Returns

This method doesn't return any data.

## Example

Record the primary language of a workbook in its document properties in a spreadsheet.

```javascript editor-xlsx
// How do I specify the language used in a workbook's metadata in a spreadsheet?

// Mark the workbook with a locale code so readers know which language it targets in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLanguage("en-US");
const language = core.GetLanguage();

let fill = Api.CreateSolidFill(Api.RGB(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Language: " + language);
```
