# GetClassType

返回 ApiGradientStop 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiGradientStop](../ApiGradientStop.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"gradientStop"

## 示例

此示例获取类类型并将其粘贴到 PDF 文档中。

```javascript editor-pdf
// How to get a class type of ApiGradientStop.

// Retrieve class type of ApiGradientStop object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const classType = gs1.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);

```
