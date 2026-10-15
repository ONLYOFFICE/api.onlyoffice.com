# SetColor

设置当前文本块的文本颜色。

继承自 [ApiTextPr.SetColor](../../ApiTextPr/Methods/SetColor.md)。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | 文本颜色。传递 *null* 可移除文本颜色。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在 PDF 中应用文本颜色。

```javascript editor-pdf
// How do I change the text appearance in a PDF?

// Modify the color of text characters in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is a text run with the font color set to black.");
paragraph.AddElement(run);
run.SetColor(Api.RGB(51, 51, 51));
page.AddObject(shape);
```
