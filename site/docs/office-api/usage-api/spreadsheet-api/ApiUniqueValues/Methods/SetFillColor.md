# SetFillColor

Sets the background color to the format condition with the previously created color object.

Sets 'No Fill' when previously created color object is null.

Inherited from [ApiFormatCondition.SetFillColor](../../ApiFormatCondition/Methods/SetFillColor.md).

## Syntax

```javascript
expression.SetFillColor(oColor);
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color object that specifies the background color for the format condition. |

## Returns

This method doesn't return any data.

## Example

Apply a background color to cells matched by a unique values formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I color the background of unique values highlighted by a formatting rule in a spreadsheet?

// Visually mark unique entries by giving their cells a colored fill in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

worksheet.GetRange("C1").SetValue("Fill color set to green");
```
