# ARABIC

Converts a Roman numeral to Arabic.

## Syntax

```javascript
expression.ARABIC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The Roman numeral to convert. |

## Returns

number

## Example

This example shows how to convert a Roman numeral to Arabic.

```javascript editor-xlsx playground
// How to convert numbers to Arabic numerical.

// Use function to convert numbers to Arabic numerical.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ARABIC("MCCL"));
```
