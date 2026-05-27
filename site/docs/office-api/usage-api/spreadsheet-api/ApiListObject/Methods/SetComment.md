# SetComment

Sets the comment (summary alternative text) for the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetComment(sComment);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sComment | Required | string |  | The comment string. |

## Returns

This method doesn't return any data.

## Example

Assign a descriptive note to a table object in a spreadsheet.

```javascript editor-xlsx
// How do I add a summary comment to a table in a spreadsheet?

// Document the purpose of a table with a short description stored alongside it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetComment("Sales data table");

worksheet.GetRange("D1").SetValue("Comment:");
worksheet.GetRange("E1").SetValue(table.GetComment());
```
