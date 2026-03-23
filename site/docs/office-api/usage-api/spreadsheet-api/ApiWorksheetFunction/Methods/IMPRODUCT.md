# IMPRODUCT

Returns the product of the specified complex numbers.

## Syntax

```javascript
expression.IMPRODUCT(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Up to 255 complex numbers expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

This example shows how to return the product of the specified complex numbers.

```javascript editor-xlsx
// How to get the result from multiplication of a complex number.

// Use a function to get the result from the product.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));
```
