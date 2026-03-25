# GetColumnWidth

返回列宽值。

## 语法

```javascript
expression.GetColumnWidth();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取列宽值。

```javascript editor-xlsx
// How to get width of a range column.

// Get a range, get its column width and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let width = worksheet.GetRange("A1").GetColumnWidth();
worksheet.GetRange("A1").SetValue("Width: ");
worksheet.GetRange("B1").SetValue(width);
```
