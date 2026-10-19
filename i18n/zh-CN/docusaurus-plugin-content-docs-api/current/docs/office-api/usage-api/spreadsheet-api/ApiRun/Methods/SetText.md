# SetText

用指定文本替换当前文本块的全部文本，同时保留文本块属性。

## 语法

```javascript
expression.SetText(text);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 文本块的新文本，可以是字符串或字符代码数组。 |

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在电子表格中通过一次调用替换文本运行的全部文本。

```javascript editor-xlsx
// How do I replace the text of a run without losing its formatting in a spreadsheet?

// Swap the wording of a run inside a shape while its formatting stays in place in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetBold(true);
run.SetFontSize(30);
run.AddText("Draft wording.");
paragraph.AddElement(run);
run.SetText("Final wording, still bold.");
```
