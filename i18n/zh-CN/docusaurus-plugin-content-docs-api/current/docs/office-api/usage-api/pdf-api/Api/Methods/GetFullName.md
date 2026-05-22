# GetFullName

返回当前打开文件的完整名称。

## 语法

```javascript
expression.GetFullName();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

检索文档文件名并在 PDF 中显示。

```javascript editor-pdf
// How do I get the file name of a PDF?

// Fetch the document name and insert it as text in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const fullName = Api.GetFullName();
paragraph.AddText("File name: " + fullName);
page.AddObject(shape);
```
