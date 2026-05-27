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

Access the custom properties stored with a workbook and read one of their values in a spreadsheet.

```javascript editor-xlsx
// How do I store and retrieve my own metadata on a workbook in a spreadsheet?

// Add a named string property to the workbook and display its value in a cell in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);
```
