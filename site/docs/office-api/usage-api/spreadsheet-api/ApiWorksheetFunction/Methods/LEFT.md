# LEFT

Returns the specified number of characters from the start of a text string.

## Syntax

```javascript
expression.LEFT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The text string containing the characters to extract. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number of the substring characters. It must be greater than or equal to 0. |

## Returns

string

## Example

Extract characters from the beginning of text in a spreadsheet.

```javascript editor-xlsx
// How do I get the first few letters or a prefix from a text string in a spreadsheet?

// Retrieve a specific number of characters counting from the left side of text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEFT("Online Office", 6));
```
