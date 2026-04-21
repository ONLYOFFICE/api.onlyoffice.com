# GetClassType

Returns a type of the ApiCustomProperties class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCustomProperties](../ApiCustomProperties.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"customProperties"

## Example

Check the class type returned by a custom properties in a spreadsheet.

```javascript editor-xlsx
// How do I check what type a custom properties object is in a spreadsheet?

// Retrieve and output the class type string for a custom properties in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const customProps = Api.GetCustomProperties();
const classType = customProps.GetClassType();

let fill = Api.CreateSolidFill(Api.RGB(0, 100, 200));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("rect", 100 * 36000, 50 * 36000, fill, stroke, 0, 0, 5, 0);

let paragraph = shape.GetDocContent().GetElement(0);
paragraph.AddText("ApiCustomProperties class type: " + classType);
```
