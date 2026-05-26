# GetActive

Returns a Boolean value that indicates whether the ListObject is active,
i.e., whether the active cell is within the range of the ListObject.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetActive();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether a formatted table is currently selected in a spreadsheet.

```javascript editor-xlsx
// How do I tell if the user's cursor is inside a particular table in a spreadsheet?

// Confirm a table is active before running table-specific operations to avoid acting on the wrong range in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("A3").SetValue("Bob");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

worksheet.GetRange("C1").SetValue("Is table active:");
worksheet.GetRange("D1").SetValue(table.GetActive());
```
