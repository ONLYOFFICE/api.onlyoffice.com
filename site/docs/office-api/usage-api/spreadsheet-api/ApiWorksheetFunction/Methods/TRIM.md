# TRIM

Removes all spaces from a text string except for single spaces between words.

## Syntax

```javascript
expression.TRIM(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text from which the spaces will be removed. |

## Returns

string

## Example

This example shows how to remove all spaces from a text string except for single spaces between words.

```javascript editor-xlsx playground
// How to delete unneccessary spaces from the text.

// Use a function to clear spaces from a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));
```
