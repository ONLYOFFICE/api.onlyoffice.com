# SetText

设置基于文本的条件格式规则中使用的文本值。

## 语法

```javascript
expression.SetText(Text);
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Text | 必需 | string |  | 要比较的文本值。 |

## 返回值

此方法不返回任何数据。

## 示例

更新触发电子表格中基于文本的格式规则的单词或短语。

```javascript editor-xlsx
// How do I change which text a conditional highlight rule looks for in a spreadsheet?

// Replace the search string in a rule so different cell content gets highlighted in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Orange");
worksheet.GetRange("A5").SetValue("Grape");
worksheet.GetRange("A6").SetValue("Peach");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTextString", "xlContains", "Apple");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original text:");
worksheet.GetRange("C2").SetValue(condition1.GetText());

condition1.SetText("Grape");

worksheet.GetRange("C4").SetValue("New text:");
worksheet.GetRange("C5").SetValue(condition1.GetText());
```
