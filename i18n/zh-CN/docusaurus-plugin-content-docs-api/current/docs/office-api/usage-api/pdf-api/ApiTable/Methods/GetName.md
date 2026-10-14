# GetName

返回当前绘图的名称。

继承自 [ApiDrawing.GetName](../../ApiDrawing/Methods/GetName.md)。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

获取 PDF 表单中形状的名称。

```javascript editor-pdf
// Read the name assigned to a drawing to identify it among page objects.

// Create a shape, set its name, then read the name and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetName("MyShape");
const name = shape.GetName();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing name: " + name);
```
