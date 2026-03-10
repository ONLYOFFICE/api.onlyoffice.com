# GetEntireColumn

返回表示包含指定范围的整列的 Range 对象。

## 语法

```javascript
expression.GetEntireColumn();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例演示如何获取包含范围的整列。

```javascript editor-xlsx
// How to select entire columns from a range.

// Get a range, get its entire columns and fill them with color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireColumns = range.EntireColumn;
entireColumns.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire columns of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);

```
