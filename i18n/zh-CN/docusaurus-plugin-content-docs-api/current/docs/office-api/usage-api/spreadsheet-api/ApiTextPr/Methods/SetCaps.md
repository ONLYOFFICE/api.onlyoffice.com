# SetCaps

指定文本运行中的任何小写字符仅格式化显示为其对应的大写字母。

## 语法

```javascript
expression.SetCaps(isCaps);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isCaps | 必需 | boolean |  | 指定当前运行的内容显示为大写。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定文本运行中的任何小写字符仅格式化显示为其对应的大写字母。

```javascript editor-xlsx
// How to make text capitalized.

// Make all characters of a text as a capital letter.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetCaps(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape set to capital letters using the text properties.");
paragraph.AddElement(run);
```
