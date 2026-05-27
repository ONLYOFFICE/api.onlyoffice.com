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

boolean

## 示例

在电子表格中为单元格文本绘制删除线。

```javascript editor-xlsx
// How do I cross out the text in a cell in a spreadsheet?

// Mark content as deleted or outdated by striking through it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A2").SetValue("Struckout text");
worksheet.GetRange("A2").SetStrikeout(true);
worksheet.GetRange("A3").SetValue("Normal text");
```
