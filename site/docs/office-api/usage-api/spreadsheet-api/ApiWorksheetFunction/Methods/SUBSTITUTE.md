# SUBSTITUTE

Replaces existing text with new text in a text string.

## Syntax

```javascript
expression.SUBSTITUTE(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text or the reference to a cell containing text in which the characters will be substituted. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The existing text to replace. If the case of the original text does not match the case of text, the function will not replace the text. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text to replace the original text with. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Specifies which occurrence of the original text to replace. If omitted, every instance of the original text will be replaced. |

## Returns

string

## Example

This example shows how to replace existing text with new text in a text string.

```javascript editor-xlsx
// How to substitute a substring with another one.

// Use a function to replace a text with another one.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));
```
