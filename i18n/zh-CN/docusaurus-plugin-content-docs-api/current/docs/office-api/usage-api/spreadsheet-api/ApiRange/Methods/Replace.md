# Replace

将范围中的特定信息替换为另一个。

## 语法

```javascript
expression.Replace(oReplaceData);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oReplaceData | 必需 | [ReplaceData](../../Enumeration/ReplaceData.md) |  | 用于搜索和替换的数据。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例将范围中的特定信息替换为另一个。

```javascript editor-xlsx
// How to replace one data value with another in a range.

// Create a range and replace its data field value with a new one.

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
let replaceData = {
    What: "200", 
    Replacement: "0",
    LookAt: "xlWhole",
    SearchOrder: "xlByColumns",
    SearchDirection: "xlNext",
    MatchCase: true,
    ReplaceAll: true
};
range.Replace(replaceData);
```
