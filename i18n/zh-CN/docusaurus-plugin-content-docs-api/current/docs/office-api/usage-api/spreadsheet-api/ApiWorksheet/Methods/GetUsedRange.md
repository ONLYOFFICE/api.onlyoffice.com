# GetUsedRange

返回表示指定工作表上已用区域的 ApiRange 对象。

## 语法

```javascript
expression.GetUsedRange();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

查找电子表格工作表上哪些单元格实际包含数据。

```javascript editor-xlsx
// Detect the exact boundaries of content without empty rows or columns in a spreadsheet?

// Shade all populated cells with a background color to visualize data extent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
