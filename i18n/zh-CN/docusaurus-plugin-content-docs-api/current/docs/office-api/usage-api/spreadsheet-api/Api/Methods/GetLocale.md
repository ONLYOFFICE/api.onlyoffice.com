# GetLocale

返回当前区域设置 ID。

## 语法

```javascript
expression.GetLocale();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取活动的区域语言设置并在电子表格的单元格中显示。

```javascript editor-xlsx
// How do I find out which locale or language region is currently set in a spreadsheet?

// Confirm the applied locale by printing its identifier into a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.SetLocale("en-CA");
let locale = Api.GetLocale();
worksheet.GetRange("A1").SetValue("Locale: " + locale);
```
