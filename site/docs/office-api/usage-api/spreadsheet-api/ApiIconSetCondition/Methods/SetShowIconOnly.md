# SetShowIconOnly

Specifies whether to display only icons in the icon set rule (without cell values).

## Syntax

```javascript
expression.SetShowIconOnly(showIconOnly);
```

`expression` - A variable that represents a [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| showIconOnly | Required | boolean |  | True to show only icons, false to show both icons and values. |

## Returns

boolean

## Example

This example shows how to display only icons without cell values.

```javascript editor-xlsx
// How to configure icon set to hide cell values and show only icons.

// Set the icon set rule to display only icons.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Status");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(60);
worksheet.GetRange("A4").SetValue(30);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Before: Shows icons and values");
iconCondition.SetShowIconOnly(true);
worksheet.GetRange("B2").SetValue("After: Shows icons only");

```
