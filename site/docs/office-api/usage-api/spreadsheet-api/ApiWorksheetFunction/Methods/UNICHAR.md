# UNICHAR

Returns the Unicode character referenced by the given numeric value.

## Syntax

```javascript
expression.UNICHAR(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The Unicode number representing a character. |

## Returns

string

## Example

This example shows how to return the Unicode character referenced by the given numeric value.

```javascript editor-xlsx
// How to get a Unicode character.

// Use a function to return the Unicode character knowing its reference number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICHAR(378));
```
