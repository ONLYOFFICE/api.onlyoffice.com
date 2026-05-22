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

Calculate the complementary error function for a specified value in a spreadsheet.

```javascript editor-xlsx
// How do I compute the complementary error function in a spreadsheet?

// Evaluate the complement of the error function from a value to infinity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));
```
