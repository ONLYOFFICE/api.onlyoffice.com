# Resize

通过更改行数和列数来调整当前范围的大小。

## 语法

```javascript
expression.Resize(rowSize, columnSize);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowSize | 必需 | number |  | 新范围的行数。 |
| columnSize | 必需 | number |  | 新范围的列数。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

通过更改行数和列数在电子表格中扩展或缩小范围。

```javascript editor-xlsx
// How do I adjust the size of a selected range to cover more or fewer cells in a spreadsheet?

// Stretch an existing range to a larger area and mark its boundaries with borders in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("B2:C3");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let resizedRange = originalRange.Resize(originalRange.Rows.Count + 2, originalRange.Columns.Count + 1);
resizedRange.SetBorders("InsideHorizontal", "Thick", Api.CreateColorFromRGB(255, 111, 61));
resizedRange.SetBorders("InsideVertical", "Thick", Api.CreateColorFromRGB(255, 111, 61));
```
