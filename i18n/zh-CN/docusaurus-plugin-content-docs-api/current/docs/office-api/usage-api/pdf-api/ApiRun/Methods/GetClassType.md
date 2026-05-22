# GetClassType

返回 ApiRun 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

"run"

## 示例

识别 PDF 中文本元素的类型。

```javascript editor-pdf
// How do I learn what kind of text object I'm working with in a PDF?

// Display the classification of a text element in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const classType = run.GetClassType();
run.SetFontSize(30);
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
page.AddObject(shape);
```
