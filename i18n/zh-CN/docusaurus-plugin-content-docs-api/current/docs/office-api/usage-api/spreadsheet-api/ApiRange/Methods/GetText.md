# GetText

返回指定范围的文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| string[][]

## 示例

此示例演示如何获取指定范围的文本。

```javascript editor-xlsx
// How to get a cell raw text value.

// Get a range, get its text value and show it in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("text1");
worksheet.GetRange("B1").SetValue("text2");
worksheet.GetRange("C1").SetValue("text3");
let range = worksheet.GetRange("A1:C1");
let text = range.GetText();
worksheet.GetRange("A3").SetValue("Text from the cell A1: " + text);

```
