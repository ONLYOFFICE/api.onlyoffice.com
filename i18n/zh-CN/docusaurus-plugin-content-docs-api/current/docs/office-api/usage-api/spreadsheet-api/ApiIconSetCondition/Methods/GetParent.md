# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格中获取拥有图标集规则的格式集合。

```javascript editor-xlsx
// How do I access the parent collection that contains an icon set formatting rule in a spreadsheet?

// Trace an icon set rule back to the formatting collection it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Values");
worksheet.GetRange("A2").SetValue(75);
worksheet.GetRange("A3").SetValue(55);
worksheet.GetRange("A4").SetValue(35);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let parent = iconCondition.GetParent();

worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());
```
