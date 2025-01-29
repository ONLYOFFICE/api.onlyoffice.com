# SetWrap

Specifies whether the words in the cell must be wrapped to fit the cell size or not.

## Syntax

expression.SetWrap(isWrap);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isWrap | Required | boolean |  | Specifies if the words in the cell will be wrapped to fit the cell size. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the words in the cell must be wrapped to fit the cell size or not.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1");
oRange.SetValue("This is the text wrapped to fit the cell size.");
oRange.SetWrap(true);
oWorksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + oRange.GetWrapText());
```
