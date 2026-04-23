# GetRowHeight

返回行高值。

## 语法

```javascript
expression.GetRowHeight();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[pt](../../Enumeration/pt.md)

## 示例

此示例演示如何获取行高值。

```javascript editor-xlsx
// How to get a cell row height.

// Get a range and display its row height in the worksheet.

let worksheet = Api.GetActiveSheet();
let height = worksheet.GetRange("A1").GetRowHeight();
worksheet.GetRange("A1").SetValue("Height: ");
worksheet.GetRange("B1").SetValue(height);
```
