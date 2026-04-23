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

此示例演示如何获取条件的图标。

```javascript editor-xlsx
// How to retrieve the icon from an icon set criterion.

// Get the icon assigned to this criterion.

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
