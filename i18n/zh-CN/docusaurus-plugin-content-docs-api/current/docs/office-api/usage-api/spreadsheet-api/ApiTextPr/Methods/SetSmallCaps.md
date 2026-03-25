# SetSmallCaps

指定文本运行中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前运行的内容是否显示为小两磅的大写字母。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定文本运行中的所有小写字母仅格式化显示为比指定字体大小小两磅的大写字母。

```javascript editor-xlsx
// How to make text uncapitalized.

// Make all characters of a text as a small letter.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetSmallCaps(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font set to small capitalized letters.");
paragraph.AddElement(run);
```
