# GetClassType

返回 ApiStroke 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStroke](../ApiStroke.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"stroke"

## 示例

查找 PDF 中边框线的对象类型标签

```javascript editor-pdf
// What class identifier does a border line report in a PDF?

// Print the type classification of a border line in a PDF

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const fill1 = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(3 * 36000, fill1);
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);

const classType = stroke.GetClassType();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + classType);
page.AddObject(shape);
```
