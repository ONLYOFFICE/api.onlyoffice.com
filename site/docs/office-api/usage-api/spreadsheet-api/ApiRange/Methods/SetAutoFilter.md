# SetAutoFilter

Adds an AutoFilter to the current range.

## Syntax

```javascript
expression.SetAutoFilter(Field, Criteria1, Operator, Criteria2, VisibleDropDown);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Field | Optional | number \| null |  | The integer offset of the field on which you want to base the filter (from the left of the list; the leftmost field is field one). If \{null\} provided, clears the AutoFilter for the range. |
| Criteria1 | Optional | string \| string[] \| [ApiColor](../../ApiColor/ApiColor.md) \| [XlDynamicFilterCriteria](../../Enumeration/XlDynamicFilterCriteria.md) |  | The criteria (a string; for example, "101"). Use "=" to find blank fields, "\<\>" to find non-blank fields, and "\>\<" to select (No Data) fields in data types. If this argument is omitted, the criteria is All. If Operator is xlTop10Items, Criteria1 specifies the number of items (for example, "10"). |
| Operator | Optional | [XlAutoFilterOperator](../../Enumeration/XlAutoFilterOperator.md) |  | An XlAutoFilterOperator constant specifying the type of filter. |
| Criteria2 | Optional | string |  | The second criteria (a string). Used with Criteria1 and Operator to construct compound criteria. |
| VisibleDropDown | Optional | boolean |  | True to display the AutoFilter drop-down arrow for the filtered field. False to hide the AutoFilter drop-down arrow for the filtered field. True by default. |

## Returns

This method doesn't return any data.

## Example

Apply an automatic filter to a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I let users filter rows by value within a range in a spreadsheet?

// Narrow visible rows down to only those matching chosen values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("header");
worksheet.GetRange("A2").SetValue("value2");
worksheet.GetRange("A3").SetValue("value3");
worksheet.GetRange("A4").SetValue("value4");
worksheet.GetRange("A5").SetValue("value5");
let range = worksheet.GetRange("A1:A5");
range.SetAutoFilter(1, ["value2","value3"], "xlFilterValues");
```
