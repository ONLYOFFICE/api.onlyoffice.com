# GetReverseOrder

返回图标集规则中的图标顺序是否反转。

## 语法

```javascript
expression.GetReverseOrder();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

了解电子表格中图标集规则是否以相反顺序显示图标。

```javascript editor-xlsx
// How do I check if the icons in a formatting rule are shown in reverse order in a spreadsheet?

// Confirm that an icon set rule is currently set to flip its icon sequence in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetReverseOrder(true);

let isReversed = iconCondition.GetReverseOrder();
worksheet.GetRange("B1").SetValue("Icons reversed: " + isReversed);
```
