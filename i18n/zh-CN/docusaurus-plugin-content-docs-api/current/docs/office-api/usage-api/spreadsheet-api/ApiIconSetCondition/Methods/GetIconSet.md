# GetIconSet

返回条件格式规则中使用的图标集类型。

## 语法

```javascript
expression.GetIconSet();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlIconSet](../../Enumeration/XlIconSet.md) \| null

## 示例

此示例演示如何从条件格式获取图标集类型。

```javascript editor-xlsx
// How to retrieve the current icon set type used in conditional formatting.

// Get the icon set type assigned to the formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Score");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(70);
worksheet.GetRange("A4").SetValue(45);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();
let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetIconSet("xl3TrafficLights1");

let iconSet = iconCondition.GetIconSet();
worksheet.GetRange("B1").SetValue("Current icon set: " + iconSet);

```
