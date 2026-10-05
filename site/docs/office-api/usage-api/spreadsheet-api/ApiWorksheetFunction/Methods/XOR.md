# XOR

Returns the logical **Exclusive Or** value of all arguments.

The function returns **true** when the number of **true** inputs is odd and **false** when the number of **true** inputs is even.

## Syntax

```javascript
expression.XOR(args);
```

`expression` - A variable that represents an [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean \| boolean[] |  | The conditions to check. |

## Returns

boolean

## Example

Perform an exclusive OR operation on multiple logical values in a spreadsheet.

```javascript editor-xlsx
// How do I test whether an odd number of conditions are true in a spreadsheet?

// Determine if exactly one or an odd number of values are true in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let logical1 = 1 > 0;
let logical2 = 2 < 0;
let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2);
worksheet.GetRange("C1").SetValue(ans);
```
