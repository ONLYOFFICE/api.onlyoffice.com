# N

Converts a value to a number, dates to serial numbers, -**true** to 1, error to [ErrorValue](../../Enumeration/ErrorValue.md), anything else to 0 (zero).

## Syntax

```javascript
expression.N(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The value to be converted. The value can be a logical value, text, or number. |

## Returns

number

## Example

This example shows how to convert a value to a number, dates to serial numbers, true to 1, error to &#123;@link global#ErrorValue ErrorValue&#125;, anything else to 0 (zero).

```javascript editor-xlsx playground
// How to convert an object to a number.

// Use a function to get a number from any data type.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.N(false));
```
