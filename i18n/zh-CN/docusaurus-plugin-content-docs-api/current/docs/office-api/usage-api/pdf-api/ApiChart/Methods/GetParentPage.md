# GetParentPage

返回 ApiDrawing 类的类型。

继承自 [ApiDrawing.GetParentPage](../../ApiDrawing/Methods/GetParentPage.md)。

## 语法

```javascript
expression.GetParentPage();
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPage](../../ApiPage/ApiPage.md) \| null \| undefined

## 示例

在 PDF 中查找包含形状的页面。

```javascript editor-pdf
// How do I get the page number of a shape I'm viewing in a PDF?

// Locate which page an object belongs to in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

page.AddObject(shape);

const parentPage = shape.GetParentPage();
const sType = parentPage.GetClassType();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The index of the shape parent page = " + parentPage.GetIndex());
```
