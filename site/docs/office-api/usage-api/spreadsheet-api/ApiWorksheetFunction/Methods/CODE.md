# CODE

Returns the code number from your computer's character set for the first character in the specified text string.

## Syntax

```javascript
expression.CODE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text for which to get the code of the first character. |

## Returns

number

## Example

This example shows how to return the code number from your computer's character set for the first character in the specified text string.

```javascript editor-xlsx
// How to return the code number from your computer's character set.

// Use function to get a code number from your computer's character set.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CODE("office"));
```
