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

获取 PDF 文档中文本属性对象的类类型。

```javascript editor-pdf
// How can I get the class type of a text properties in a PDF document?

// Get the class type of a text properties and display it in the PDF.

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
