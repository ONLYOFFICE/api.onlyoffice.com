# Find

在当前范围中查找特定信息。

## 语法

```javascript
expression.Find(oSearchData);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oSearchData | 必需 | [SearchData](../../Enumeration/SearchData.md) |  | 用于搜索的搜索数据。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例在范围中查找特定信息。

```javascript editor-xlsx
// How to search throughout the range.

// Get a range, search information using value, position, order, etc.

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
let searchData = {
    What: "200",
    After: worksheet.GetRange("B1"),
    LookIn: "xlValues",
    LookAt: "xlWhole",
    SearchOrder: "xlByColumns",
    SearchDirection: "xlNext",
    MatchCase: true
};
let searchRange = range.Find(searchData);
searchRange.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));

```
