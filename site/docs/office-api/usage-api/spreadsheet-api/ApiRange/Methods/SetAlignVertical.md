# SetAlignVertical

Sets the vertical alignment of the text in the current cell range.

## Syntax

```javascript
expression.SetAlignVertical(sAligment);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAligment | Required | 'center' \| 'bottom' \| 'top' \| 'distributed' \| 'justify' |  | The vertical alignment that will be applied to the cell contents. |

## Returns

boolean

## Example

This example sets the vertical alignment of the text in the cell range.

```javascript editor-xlsx
// How to change the vertical alignment of the cell content.

// Change the vertical alignment of the ApiRange content to distributed.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:D5");
worksheet.GetRange("A2").SetValue("This is just a sample text distributed in the A2 cell.");
range.SetAlignVertical("distributed");
```
