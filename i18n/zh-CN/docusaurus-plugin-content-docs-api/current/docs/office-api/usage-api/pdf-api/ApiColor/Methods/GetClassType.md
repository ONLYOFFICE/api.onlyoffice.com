# GetClassType

返回 ApiColor 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiColor](../ApiColor.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"color"

## 示例

此示例获取类类型并将其粘贴到 PDF 文档中。

```javascript editor-pdf
// How to get a class type of ApiColor.

// Retrieve class type of ApiColor object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const color = Api.RGB(255, 0, 0);
const classType = color.GetClassType();
run.SetFontSize(30);
run.AddText("Class Type = " + classType);
paragraph.AddElement(run);
page.AddObject(shape);

```
