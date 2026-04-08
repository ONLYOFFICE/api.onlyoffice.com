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

此示例演示如何将范围调整为不同的行数和列数。

```javascript editor-xlsx
// How to resize a range.

// Get a range, resize it and fill the resized range with color.

let worksheet = Api.GetActiveSheet();
let originalRange = worksheet.GetRange("B2:C3");
originalRange.SetValue("Original");
originalRange.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let resizedRange = originalRange.Resize(originalRange.Rows.Count + 2, originalRange.Columns.Count + 1);
resizedRange.SetBorders("InsideHorizontal", "Thick", Api.CreateColorFromRGB(255, 111, 61));
resizedRange.SetBorders("InsideVertical", "Thick", Api.CreateColorFromRGB(255, 111, 61));

```
