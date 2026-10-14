# AddText

向当前文本块添加文本。

## 语法

```javascript
expression.AddText(text, widths);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | string \| number[] |  | 要添加到当前文本块的文本。可以是字符串或 Unicode 码位数组。 |
| widths | 可选 | number[] |  | 字符宽度数组（以毫米为单位）。其长度应与 "text" 参数中传递的码位数组相同。指定宽度后，添加的字符将严格保持这些宽度。 |

## 返回值

boolean

## 示例

将文本写入文本运行并将其放入电子表格工作表上的形状内。

```javascript editor-xlsx
// How do I put readable text inside a shape in a spreadsheet?

// Build a styled text run and attach it to a paragraph within a shape in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. Nothing special.");
paragraph.AddElement(run);
```
