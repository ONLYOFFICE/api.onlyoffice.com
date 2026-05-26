# Copy

创建当前文本块的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在演示文稿中复制文本运行。

```javascript editor-pptx
// How do I copy a text run and add it to a paragraph in a presentation?

// Reuse text formatting and content by copying a text run in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text that was copied. ");
paragraph.AddElement(run);

const copyRun = run.Copy();
paragraph.AddElement(copyRun);
slide.AddObject(shape);
```
