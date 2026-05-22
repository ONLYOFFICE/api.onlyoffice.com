# SetReadingOrder

Sets the direction (reading order) of the text in the current cell range.

## Syntax

```javascript
expression.SetReadingOrder(direction);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| direction | Required | 'context' \| 'ltr' \| 'rtl' |  | The direction (reading order) that will be applied to the cell contents. |

## Returns

This method doesn't return any data.

## Example

Set the direction text is read across a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I switch text to read right-to-left in a spreadsheet?

// Support languages like Arabic or Hebrew by adjusting the text flow direction in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B2").SetValue("Hello, أهلاً, 你好");
const range = worksheet.GetRange("A1:C3");
range.SetReadingOrder('rtl');
```
