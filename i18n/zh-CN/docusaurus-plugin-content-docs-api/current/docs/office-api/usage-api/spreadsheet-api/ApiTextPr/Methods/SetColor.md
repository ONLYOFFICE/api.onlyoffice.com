# SetColor

设置当前文本块的文本颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | 文本颜色。传递 *null* 可移除文本颜色。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

```javascript editor-xlsx
// How do I change the text color with text properties in a spreadsheet?

// Get the text properties of a run inside a shape and apply a dark blue color to its characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetColor(Api.RGB(31, 56, 100));
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font color set to dark blue using the text properties.");
paragraph.AddElement(run);
```
