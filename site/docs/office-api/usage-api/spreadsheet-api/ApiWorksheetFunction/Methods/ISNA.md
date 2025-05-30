# ISNA

Checks whether a value is &lt;em&gt;#N/A&lt;/em&gt;, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISNA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));
```
