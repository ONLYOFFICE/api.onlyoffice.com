# GetShowIconOnly

返回图标集规则中是否仅显示图标（不显示单元格值）。

## 语法

```javascript
expression.GetShowIconOnly();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

此示例演示如何检查是否仅显示图标。

```javascript editor-xlsx
// How to determine if icon set displays only icons without cell values.

// Check if the icon set rule shows only icons.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Progress");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(50);
worksheet.GetRange("A4").SetValue(25);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetShowIconOnly(true);

let showIconOnly = iconCondition.GetShowIconOnly();
worksheet.GetRange("B1").SetValue("Show icon only: " + showIconOnly);

```
