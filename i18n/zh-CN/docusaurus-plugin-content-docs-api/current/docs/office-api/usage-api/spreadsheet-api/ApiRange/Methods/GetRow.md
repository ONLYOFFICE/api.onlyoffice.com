# GetRow

返回所选单元格的行号。

## 语法

```javascript
expression.GetRow();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例演示如何获取所选单元格的行号。

```javascript editor-xlsx
// How to get a cell column index.

// Get a range and display its column number.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A9").GetRow();
worksheet.GetRange("A2").SetValue(range.toString());
```
