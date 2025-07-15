# GetClassType

Returns a type of the ApiCore class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"core"

## Example

This example gets a class type and pastes it into the worksheet.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const core = Api.GetCore();
const classType = core.GetClassType();

let fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 50, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	"rect",
	100 * 36000, 100 * 36000,
	fill, stroke,
	0, 0, 3, 0
);

let paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Class type: " + classType);

```
