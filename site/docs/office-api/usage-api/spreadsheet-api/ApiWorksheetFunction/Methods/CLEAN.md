# CLEAN

Removes all the nonprintable characters from the text.

## Syntax

```javascript
expression.CLEAN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | A string from which nonprintable characters will be removed. |

## Returns

string

## Example

This example shows how to remove all the nonprintable characters from the text.

```javascript editor-xlsx
// How to remove all the nonprintable characters from the text.

// Use function to clean all nonprintable characters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CLEAN("\ntext"));
```
