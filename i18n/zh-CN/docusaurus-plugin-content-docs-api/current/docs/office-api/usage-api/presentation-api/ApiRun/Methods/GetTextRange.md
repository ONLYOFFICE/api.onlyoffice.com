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

通过文本区域为幻灯片上图形文本块的一部分设置颜色。

```javascript editor-pptx
// Positions are counted from the beginning of the run, so the rest of the paragraph is untouched.

// Take the range of the first word of the run and paint it red.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("Hello World");
paragraph.AddElement(run);

const range = run.GetTextRange(0, 5);
range.SetColor(Api.RGB(255, 0, 0));
```
