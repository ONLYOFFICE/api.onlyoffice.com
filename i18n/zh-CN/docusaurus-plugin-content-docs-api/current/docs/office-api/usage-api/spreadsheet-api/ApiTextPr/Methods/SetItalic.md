# SetItalic

为文本字符设置斜体属性。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前运行的内容显示为斜体。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例为文本字符设置斜体属性。

```javascript editor-xlsx
// How to make text italic.

// Set italic property of a text.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetItalic(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font set to italicized letters using the text properties.");
paragraph.AddElement(run);
```
