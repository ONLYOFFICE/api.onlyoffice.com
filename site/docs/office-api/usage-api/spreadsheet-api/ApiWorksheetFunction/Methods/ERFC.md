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

Return the complementary error function integrated between the specified lower limit and infinity in a spreadsheet.

```javascript editor-xlsx
// How to get the complementary error function (from lower limit and infinity) in a spreadsheet.

// Use function to get a complementary error function set between the specified lower limit and infinity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ERFC(-2));
```
