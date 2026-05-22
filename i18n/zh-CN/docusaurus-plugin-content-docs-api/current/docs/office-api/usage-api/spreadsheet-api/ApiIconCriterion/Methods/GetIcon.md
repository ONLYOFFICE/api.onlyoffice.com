# GetIcon

返回与当前图标条件关联的图标。

## 语法

```javascript
expression.GetIcon();
```

`expression` - 表示 [ApiIconCriterion](../ApiIconCriterion.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlIcon](../../Enumeration/XlIcon.md) \| null

## 示例

读取电子表格中分配给条件格式条件的图标。

```javascript editor-xlsx
// How do I find out what icon a formatting rule uses in a spreadsheet?

// Check the visual symbol tied to a specific condition in an icon set rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Quality");
worksheet.GetRange("A2").SetValue(90);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(40);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

let criteria = iconCondition.GetIconCriteria();
let firstIcon = criteria[0].GetIcon();

worksheet.GetRange("B1").SetValue("First criterion icon: " + firstIcon);
```
