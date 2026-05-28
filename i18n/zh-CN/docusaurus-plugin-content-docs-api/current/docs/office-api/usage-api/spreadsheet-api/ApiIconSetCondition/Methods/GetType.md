# GetType

返回图标集条件格式规则的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## 示例

读取电子表格中图标集条件格式规则的类型标识符。

```javascript editor-xlsx
// How do I find out what type an icon set formatting rule is in a spreadsheet?

// Distinguish an icon set rule from other formatting rule types in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Ratings');
worksheet.GetRange('A2').SetValue(90);
worksheet.GetRange('A3').SetValue(60);
worksheet.GetRange('A4').SetValue(25);

const range = worksheet.GetRange('A2:A4');
const formatConditions = range.GetFormatConditions();
const iconCondition = formatConditions.AddIconSetCondition();

const conditionType = iconCondition.GetType();
worksheet.GetRange('B1').SetValue('Icon set condition type: ' + conditionType);
```
