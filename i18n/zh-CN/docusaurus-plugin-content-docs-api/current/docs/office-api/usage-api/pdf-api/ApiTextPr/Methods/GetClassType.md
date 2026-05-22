# GetClassType

返回 ApiTextPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"textPr"

## 示例

识别 PDF 中文本格式设置的对象类型。

```javascript editor-pdf
// How do I determine what kind of formatting object I'm working with in a PDF?

// Retrieve the classification information for text properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
paragraph.SetJc("left");
const classType = textPr.GetClassType();
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
page.AddObject(shape);
```
