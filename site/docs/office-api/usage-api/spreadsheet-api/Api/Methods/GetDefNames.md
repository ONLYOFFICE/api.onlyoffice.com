# GetDefNames

Returns an array of all ApiName objects defined in the workbook, across all scopes (workbook-level and sheet-level).

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetDefNames();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiName](../../ApiName/ApiName.md)[]

## Example

This example shows how to get an array of all ApiName objects defined in the workbook.

```javascript editor-xlsx
// How to get all def names from the workbook across all scopes.

// Get all workbook-level and sheet-level def names as an array.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("A2").SetValue("A");
worksheet.GetRange("B2").SetValue("B");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
worksheet.AddDefName("letters", "Sheet1!$A$2:$B$2");
let defNames = Api.GetDefNames();
worksheet.GetRange("A4").SetValue("DefNames: " + defNames[0].GetName() + ", " + defNames[1].GetName());
```
