# GetItem

Returns a format condition by its index.

## Syntax

```javascript
expression.GetItem(index);
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| index | Required | number |  | The index of the format condition (1-based). |

## Returns

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## Example

This example gets a specific conditional formatting rule by index.

```javascript editor-xlsx
// How to get individual conditional formatting rules from a collection.

// Get specific conditional formatting rule by index.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

formatConditions.AddDatabar();

let firstRule = formatConditions.GetItem(1);

worksheet.GetRange("B1").SetValue("Rule found: " + (firstRule !== null));

```
