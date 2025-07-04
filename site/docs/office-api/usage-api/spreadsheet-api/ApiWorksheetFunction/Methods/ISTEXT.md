# ISTEXT

Checks whether a value is text, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISTEXT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

This example shows how to check whether a value is text, and returns true or false.

```javascript editor-xlsx
// How to know whether a value is a text.

// Use a function to find out whether a value is a text.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ISTEXT(255));
worksheet.GetRange("A2").SetValue(func.ISTEXT("#N/A"));
worksheet.GetRange("A3").SetValue(func.ISTEXT("Online Office"));
```
