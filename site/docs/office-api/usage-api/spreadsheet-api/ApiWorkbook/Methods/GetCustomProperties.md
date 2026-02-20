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

This example demonstrates how to get ApiCustomProperties object of the workbook

```javascript editor-xlsx playground
const workbook = Api.GetActiveWorkbook();
const customProps = workbook.GetCustomProperties();
customProps.Add("MyStringProperty", "Hello, Spreadsheet!");
let stringValue = customProps.Get("MyStringProperty");

const worksheet = workbook.GetActiveSheet();
worksheet.GetRange('A1').SetValue(stringValue);

```
