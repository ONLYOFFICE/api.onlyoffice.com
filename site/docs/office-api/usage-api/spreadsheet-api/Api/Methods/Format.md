# Format

Returns a class formatted according to the instructions contained in the format expression.

## Syntax

```javascript
expression.Format(expression, format);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| expression | Required | string |  | Any valid expression. |
| format | Optional | string |  | A valid named or user-defined format expression. |

## Returns

string

## Example

Apply a number format pattern to a value in a spreadsheet.

```javascript editor-xlsx
// How do I format a number using a custom pattern in a spreadsheet?

// Display a value with a specific formatting style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
worksheet.GetRange("A1").SetValue(format);
```
