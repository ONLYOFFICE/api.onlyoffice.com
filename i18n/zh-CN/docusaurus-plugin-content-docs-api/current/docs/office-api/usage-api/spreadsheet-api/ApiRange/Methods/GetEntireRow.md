# GetEntireRow

返回表示包含指定范围的整行的 Range 对象。

## 语法

```javascript
expression.GetEntireRow();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例演示如何获取包含范围的整行。

```javascript editor-xlsx
// How to select entire rows from a range.

// Get a range, get its entire rows and fill them with color.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("C3:E5");
range.SetValue("Range");
range.SetFillColor(Api.CreateColorFromRGB(173, 216, 230));

let entireRows = range.EntireRow;
entireRows.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

worksheet.GetRange("A1").SetValue("Entire rows of C3:E5 are highlighted");
worksheet.GetRange("A1").AutoFit(false, true);

```
