# UPPER

Converts a text string to all uppercase letters.

## Syntax

```javascript
expression.UPPER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text which will be converted to uppercase, a reference or a text string. |

## Returns

string

## Example

This example shows how to convert a text string to all uppercase letters.

```javascript editor-xlsx
// How to make a string characters uppercase.

// Use a function to convert all letters to uppercase.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));
```
