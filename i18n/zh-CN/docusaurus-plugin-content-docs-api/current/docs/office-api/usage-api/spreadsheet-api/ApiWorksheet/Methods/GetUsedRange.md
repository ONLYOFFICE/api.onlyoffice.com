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

此示例展示如何获取表示指定工作表上已用区域的 ApiRange 对象。

```javascript editor-xlsx
// How to get used ranges from the worksheet.

// Get used ranges and fill it with color.

let worksheet = Api.GetActiveSheet();
let usedRange = worksheet.GetUsedRange();
usedRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
