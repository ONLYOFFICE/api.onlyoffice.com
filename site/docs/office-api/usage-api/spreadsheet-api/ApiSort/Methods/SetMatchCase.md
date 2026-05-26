# SetMatchCase

Sets whether the sort is case-sensitive.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetMatchCase(bMatchCase);
```

`expression` - A variable that represents a [ApiSort](../ApiSort.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bMatchCase | Required | boolean |  | No description provided. |

## Returns

This method doesn't return any data.

## Example

Turn on case-sensitive sorting for a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I make the sort treat uppercase and lowercase letters as different values in a spreadsheet?

// Configure the sort to distinguish between upper and lower case text before ordering rows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("apple");
worksheet.GetRange("A3").SetValue("cherry");
worksheet.GetRange("A4").SetValue("Apple");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
sort.SetMatchCase(true);
sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("First product after case-sensitive sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
```
