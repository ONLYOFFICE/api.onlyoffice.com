# GetNumberFormat

返回表示当前范围的格式代码的值。

## 语法

```javascript
expression.GetNumberFormat();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

此示例演示如何获取表示当前范围的格式代码的值。

```javascript editor-xlsx
// How to find out a number format of a range.

// Get a range, get its cell number format and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B2");
range.SetValue(3);
let format = range.GetNumberFormat();
worksheet.GetRange("B3").SetValue("Number format: " + format);
```
