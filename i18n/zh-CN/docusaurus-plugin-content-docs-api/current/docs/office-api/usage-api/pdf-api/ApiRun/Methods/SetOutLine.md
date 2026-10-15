# SetOutLine

设置当前文本块的文本轮廓。

继承自 [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md)。

## 语法

```javascript
expression.SetOutLine(oStroke);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建文本轮廓的笔画。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在 PDF 中为文本添加轮廓边框。

```javascript editor-pdf
// How do I add a stroke effect to text in a PDF?

// Apply a border around text characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
const runStroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
run.SetOutLine(runStroke);
run.AddText("This is a text run with the black text outline.");
paragraph.AddElement(run);
page.AddObject(shape);
```
