# GetParent

Returns the ApiWorksheet object that is the parent of the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

Identify the worksheet that contains a given table in a spreadsheet.

```javascript editor-xlsx
// How do I find out which sheet a table belongs to in a spreadsheet?

// Navigate from a table back to its parent sheet to work with other cells on the same sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let parent = table.GetParent();
worksheet.GetRange("D1").SetValue("Parent sheet name:");
worksheet.GetRange("E1").SetValue(parent.GetName());
```
