# IMLN

Returns the natural logarithm of a complex number.

## Syntax

```javascript
expression.IMLN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

This example shows how to return the natural logarithm of a complex number.

```javascript editor-xlsx
// How to get the natural logarithm of a comlex numbers.

// Use a function to get the natural logarithm.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLN("-2+2.5i"));
```
