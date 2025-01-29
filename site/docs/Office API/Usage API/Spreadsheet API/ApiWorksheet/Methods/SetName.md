# SetName

Sets a name to the current active sheet.

## Syntax

expression.SetName(sName);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name which will be displayed for the current sheet at the sheet tab. |

## Returns

This method doesn't return any data.

## Example

This example sets a name to the active sheet.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetName("sheet 1");
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Worksheet name: ");
oWorksheet.GetRange("A1").AutoFit(false, true);
oWorksheet.GetRange("B1").SetValue(sName);
```
