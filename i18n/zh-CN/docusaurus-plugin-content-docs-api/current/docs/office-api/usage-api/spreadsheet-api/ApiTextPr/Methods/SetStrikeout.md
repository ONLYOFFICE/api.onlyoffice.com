# SetStrikeout

指定文本块的内容显示为中间有一条水平线穿过。

## 语法

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | 必需 | boolean |  | 指定当前文本块的内容显示为删除线。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

指定在电子表格中 run 的内容以通过行中心的单条水平线显示。

```javascript editor-xlsx
// How to strike out a text with one line in a spreadsheet.

// Cross out a text with one line in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetStrikeout(true);
paragraph.SetJc("left");
run.AddText("This is a struck out text inside the shape.");
paragraph.AddElement(run);
```
