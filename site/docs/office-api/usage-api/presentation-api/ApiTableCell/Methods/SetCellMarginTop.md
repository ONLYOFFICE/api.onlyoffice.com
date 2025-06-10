# SetCellMarginTop

Specifies an amount of space which shall be left between the top extent of the current cell contents and the
top edge border of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginTop(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell top margin shall be used, otherwise override the table cell top margin with specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which shall be left between the top extent of the current cell contents and the top edge border of a specific individual table cell within a table.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oContent = oCell.GetContent();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oContent.Push(oParagraph);
oCell.SetCellMarginTop(720);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
