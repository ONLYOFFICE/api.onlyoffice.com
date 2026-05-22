# T

Checks whether a value is text, and returns the text if it is, or returns double quotes (empty text) if it is not.

## Syntax

```javascript
expression.T(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The value to test. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string

## Example

Check whether a value is text, and return the text if it is, or returns double quotes (empty text) if it is not in a spreadsheet.

```javascript editor-xlsx
// Test if a value is text using the T function and return accordingly.

// Returns the text value if the input is text, otherwise returns empty string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.T("date and time"));
```
