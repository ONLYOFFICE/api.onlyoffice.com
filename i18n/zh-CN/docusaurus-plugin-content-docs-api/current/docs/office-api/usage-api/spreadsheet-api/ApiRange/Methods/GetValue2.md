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

此示例演示如何获取指定范围的不带格式的值。

```javascript editor-xlsx
// How to get a cell raw value.

// Get a range, get its raw value without format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
let range = worksheet.GetRange("A1");
range.SetValue(format);
let value2 = range.GetValue2();
worksheet.GetRange("A3").SetValue("Value of the cell A1 without format: " + value2);
```
