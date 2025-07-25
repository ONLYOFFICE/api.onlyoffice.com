# TEXT

Converts a value to text in a specific number format.

## Syntax

```javascript
expression.TEXT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | A number, a formula that evaluates to a numeric value, or a reference to a cell containing a numeric value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | A number format in the text form from the **Number format** combo box on the **Home** tab. |

## Returns

string

## Example

This example shows how to convert a value to text in a specific number format.

```javascript editor-xlsx
// How to convert a value to text.

// Use a function to convert a value to text.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TEXT(45.5, "$0.00"));
```
