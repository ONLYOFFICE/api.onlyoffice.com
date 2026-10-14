# GetClassType

返回 ApiMath 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiMath](../ApiMath.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"math"

## 示例

识别 PDF 中数学公式的对象类型。

```javascript editor-pdf
// Find out what kind of object a formula is in a PDF.

// Confirm the category a math equation belongs to in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
const classType = math.GetClassType();

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Class Type = " + classType);
docContent.Push(paragraph2);
```
