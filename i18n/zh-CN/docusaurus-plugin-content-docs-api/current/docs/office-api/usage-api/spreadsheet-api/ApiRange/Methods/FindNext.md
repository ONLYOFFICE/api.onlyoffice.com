# FindNext

继续使用 [ApiRange#Find](../../ApiRange/Methods/Find.md) 方法开始的搜索。查找匹配相同条件的下一个单元格并返回表示该单元格的 ApiRange 对象。这不会影响选择或活动单元格。

## 语法

```javascript
expression.FindNext(After);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| After | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 搜索将在此单元格之后开始。如果未指定此参数，搜索将从上次找到的单元格开始。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

继续搜索以在初始结果之后查找电子表格中的下一个匹配单元格。

```javascript editor-xlsx
// How do I move to the next cell that shares the same value as the one already found in a spreadsheet?

// Step through every matching cell in a range one by one and mark each occurrence in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("A4").SetValue("Cost price");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(50);
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(120);
worksheet.GetRange("D2").SetValue(200);
worksheet.GetRange("D3").SetValue(200);
worksheet.GetRange("D4").SetValue(160);
let range = worksheet.GetRange("A2:D4");
let searchRange = range.Find("200", "B1", "xlValues", "xlWhole", "xlByColumns", "xlNext", true);
searchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
let nextSearchRange = range.FindNext(searchRange);
nextSearchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
```
