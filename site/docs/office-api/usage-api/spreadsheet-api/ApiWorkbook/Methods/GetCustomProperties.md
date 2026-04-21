# GetCustomProperties

Returns the custom properties of the workbook.

## Syntax

```javascript
expression.GetCustomProperties();
```

`expression` - A variable that represents a [ApiWorkbook](../ApiWorkbook.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCustomProperties](../../ApiCustomProperties/ApiCustomProperties.md)

## Example

Get custom properties object of the workbook in a spreadsheet.

```javascript editor-xlsx
// How can I get custom properties using a workbook in a spreadsheet?

// Get custom properties for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);
```
