# LEN

Returns the number of characters in a text string.

## Syntax

```javascript
expression.LEN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text whose length will be returned. Spaces are considered as characters. |

## Returns

number

## Example

This example shows how to return the number of characters in a text string.

```javascript editor-xlsx
// How to get a length of a text.

// Use a function to get length of a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));
```
