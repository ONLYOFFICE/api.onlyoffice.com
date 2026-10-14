# GetTextRange

返回表示当前文本块中所含部分文本的 ApiTextRange 对象。调用此方法前，文本块必须已附加到文档中。

## 语法

```javascript
expression.GetTextRange(start, end);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 相对于文本块的起始字符位置（从 0 开始，包含该位置）。 |
| end | 可选 | number |  | 结束字符位置（从 0 开始，不包含该位置）。默认为文本块末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

通过文本区域为工作表上图形文本块的一部分设置颜色。

```javascript editor-xlsx
// Positions are counted from the beginning of the run, so the rest of the paragraph is untouched.

// Take the range of the first word of the run and paint it red.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 150 * 36000, 65 * 36000, fill, stroke, 0, 2 * 36000, 2, 3 * 36000);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("Hello World");
paragraph.AddElement(run);

let range = run.GetTextRange(0, 5);
range.SetColor(Api.RGB(255, 0, 0));
```
