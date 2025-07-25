# AND

Checks whether all conditions in a test are -**true**.

## Syntax

```javascript
expression.AND(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | A condition to check. |

## Returns

boolean

## Example

This example shows how to check whether all conditions in a test are true.

```javascript editor-xlsx
// How to apply logical AND operation for a list of conditions.

// Use logical AND to evaluate an expression.

const worksheet = Api.GetActiveSheet();

let func = Api.GetWorksheetFunction();
let ans = func.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

worksheet.GetRange("C1").SetValue(ans);
```
