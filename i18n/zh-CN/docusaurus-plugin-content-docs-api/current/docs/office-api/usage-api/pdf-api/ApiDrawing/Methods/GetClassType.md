# GetClassType

返回 ApiDrawing 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"drawing"

## 示例

如何获取 ApiDrawing 的类类型。

```javascript editor-pdf
// Retrieve class type of ApiDrawing object and insert it to the page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(150 * 36000, 65 * 36000);
page.AddObject(drawing);

const aDrawings = page.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
```
