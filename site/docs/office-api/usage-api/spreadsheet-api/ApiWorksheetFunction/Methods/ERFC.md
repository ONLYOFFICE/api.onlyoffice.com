# ERFC

Returns the complementary error function integrated between the specified lower limit and infinity.

## Syntax

```javascript
expression.ERFC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lower bound for integrating the complementary error function. |

## Returns

number

## Example

This example shows how to return the complementary error function integrated between the specified lower limit and infinity.

```javascript editor-xlsx playground
// How to get the complementary error function (from lower limit and infinity).

// Use function to get a complementary error function set between the specified lower limit and infinity.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));
```
