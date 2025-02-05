# Paste

Pastes the Range object to the specified range.

## Syntax

```javascript
expression.Paste(rangeFrom);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rangeFrom | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Specifies the range to be pasted to the current range |

## Returns

This method doesn't return any data.

## Example

This example pastes the Range object to the specified range.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B4").SetValue("1");
oWorksheet.GetRange("C4").SetValue("2");
oWorksheet.GetRange("D4").SetValue("3");
var oRangeFrom = oWorksheet.GetRange("B4:D4");
var oRange = oWorksheet.GetRange("A1:C1");
oRange.Paste(oRangeFrom);
```
