# GetLanguage

Returns the document language.

## Syntax

```javascript
expression.GetLanguage();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example demonstrates how to get the language of the current workbook using the ApiCore.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();

core.SetLanguage("en-US");
const language = core.GetLanguage();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
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
