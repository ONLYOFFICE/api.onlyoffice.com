# GetMailMergeData

Returns the mail merge data.

## Syntax

```javascript
expression.GetMailMergeData(nSheet, bWithFormat);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSheet | Required | number |  | The sheet index. |
| bWithFormat | Optional | boolean | false | Specifies that the data will be received with the format. |

## Returns

string[][]

## Example

This example shows how to get the mail merge data.

```javascript editor-xlsx
// Get mail merge data from the worksheet.

// How to get mail merge information using index.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetColumnWidth(0, 20);
oWorksheet.GetRange("A1").SetValue("Email address");
oWorksheet.GetRange("B1").SetValue("Greeting");
oWorksheet.GetRange("C1").SetValue("First name");
oWorksheet.GetRange("D1").SetValue("Last name");
oWorksheet.GetRange("A2").SetValue("user1@example.com");
oWorksheet.GetRange("B2").SetValue("Dear");
oWorksheet.GetRange("C2").SetValue("John");
oWorksheet.GetRange("D2").SetValue("Smith");
oWorksheet.GetRange("A3").SetValue("user2@example.com");
oWorksheet.GetRange("B3").SetValue("Hello");
oWorksheet.GetRange("C3").SetValue("Kate");
oWorksheet.GetRange("D3").SetValue("Cage");
var aMailMergeData = Api.GetMailMergeData(0);
oWorksheet.GetRange("A5").SetValue("Mail merge data: " + aMailMergeData);
```
