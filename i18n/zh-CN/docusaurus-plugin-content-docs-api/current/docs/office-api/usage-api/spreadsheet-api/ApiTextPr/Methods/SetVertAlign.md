# SetVertAlign

指定将应用于运行内容相对于运行文本默认外观的对齐方式：
-**"baseline"** - 当前文本运行中的字符将按默认文本基线对齐。
-**"subscript"** - 当前文本运行中的字符将对齐到默认文本基线下方。
-**"superscript"** - 当前文本运行中的字符将对齐到默认文本基线上方。

## 语法

```javascript
expression.SetVertAlign(sType);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "baseline" \| "subscript" \| "superscript" |  | 应用于文本内容的垂直对齐类型。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定将应用于当前运行内容相对于文本运行默认外观的对齐方式。

```javascript editor-xlsx
// How to change vertical alignment of a text.

// Make text superscript.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetVertAlign("superscript");
paragraph.SetJc("left");
run.AddText("This is a text inside the shape with vertical alignment set to 'superscript'.");
paragraph.AddElement(run);
```
