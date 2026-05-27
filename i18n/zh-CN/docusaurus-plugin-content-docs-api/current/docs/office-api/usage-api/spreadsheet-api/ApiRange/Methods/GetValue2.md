# GetValue2

返回指定范围的 Value2 属性（不带格式的值）。

## 语法

```javascript
expression.GetValue2();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| string[][]

## 示例

从电子表格中的单元格读取未格式化的原始值。

```javascript editor-xlsx
// How do I get the number stored in a cell without any formatting in a spreadsheet?

// Extract the underlying value from a formatted cell to use it elsewhere in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
let range = worksheet.GetRange("A1");
range.SetValue(format);
let value2 = range.GetValue2();
worksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + value2);
```
