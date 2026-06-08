# IF

Checks whether a condition is met, and returns one value if - **true**, and another value if - **false**.

## Syntax

```javascript
expression.IF(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | Any value or expression that can be evaluated to **true** or **false**. |
| arg2 | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | The value that is returned if the condition is **true**. If omitted, **true** is returned. You can nest up to seven IF functions. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| boolean |  | The value that is returned if the condition is **false**. If omitted, **false** is returned. |

## Returns

number \| string \| boolean

## Example

Return different values based on whether a condition is true or false in a spreadsheet.

```javascript editor-xlsx
// How do I test a condition and display different results in a spreadsheet?

// Execute conditional logic to display specific values when criteria are met in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IF("12<100", 0, 1));
```
