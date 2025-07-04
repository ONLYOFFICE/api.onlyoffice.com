# LOWER

Converts all letters in a text string to lowercase.

## Syntax

```javascript
expression.LOWER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text to convert to lowercase. The text characters that are not letters are not changed. |

## Returns

string

## Example

This example shows how to convert all letters in a text string to lowercase.

```javascript editor-xlsx
// How to make all characters uncapitalized.

// Use a function to make a text string to lowercase.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.LOWER("Day"));

```
