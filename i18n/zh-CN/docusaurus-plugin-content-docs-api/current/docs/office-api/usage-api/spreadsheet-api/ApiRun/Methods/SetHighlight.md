# SetHighlight

指定作为背景应用于当前运行内容的高亮颜色。

## 语法

```javascript
expression.SetHighlight(sColor);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 可用的突出显示颜色。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定作为背景应用于运行内容的高亮颜色。

```javascript editor-xlsx
// How to color a text object background.

// Create a text run object, add color to its background.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetHighlight("lightGray");
run.AddText("This is a text run with the text highlighted with light gray color.");
paragraph.AddElement(run);
```
