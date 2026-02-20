# GetParent

Returns the parent range object associated with the current conditional formatting collection.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiFormatConditions](../ApiFormatConditions.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example gets the parent range of conditional formatting rules.

```javascript editor-xlsx playground
// How to get the range that contains conditional formatting rules.

// Get parent range of conditional formatting rules.

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

let parentRange = formatConditions.GetParent();

worksheet.GetRange("B1").SetValue("Parent: " + parentRange.GetAddress());

```
