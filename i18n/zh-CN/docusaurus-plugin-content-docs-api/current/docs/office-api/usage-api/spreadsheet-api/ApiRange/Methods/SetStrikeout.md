# SetStrikeout

指定单元格/单元格范围的内容显示时在内容中心有一条水平删除线。

## 语法

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | 必需 | boolean |  | 指定当前单元格/单元格范围的内容是否显示为删除线。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例指定单元格的内容显示时在内容中心有一条水平线。

```javascript editor-xlsx
// How to add strikeout to the cell value.

// Get a range and add strikeout to its text.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Struckout text");
worksheet.GetRange("A2").SetStrikeout(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
