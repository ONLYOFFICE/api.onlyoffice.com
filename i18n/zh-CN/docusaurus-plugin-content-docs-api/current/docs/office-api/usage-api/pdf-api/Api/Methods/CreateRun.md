# CreateRun

创建要插入到当前段落或表格中的新的较小文本块。

## 语法

```javascript
expression.CreateRun();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在 PDF 中向形状插入具有不同字体大小和字体系列的文本。

```javascript editor-pdf
// How do I add formatted text to a shape in a PDF?

// Create separate text runs with distinct font properties inside a shape in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetFontSize(60);
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
page.AddObject(shape);
```
