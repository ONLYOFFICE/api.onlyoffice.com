# GetAlternativeText

Returns the alternative text for the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetAlternativeText();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the alternative text assigned to a table in a spreadsheet.

```javascript editor-xlsx
// How do I retrieve the accessibility description of a table in a spreadsheet?

// Check what descriptive label a table carries for assistive technologies in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");
table.SetAlternativeText("List of products");

worksheet.GetRange("C1").SetValue("Alternative text:");
worksheet.GetRange("D1").SetValue(table.GetAlternativeText());
```
