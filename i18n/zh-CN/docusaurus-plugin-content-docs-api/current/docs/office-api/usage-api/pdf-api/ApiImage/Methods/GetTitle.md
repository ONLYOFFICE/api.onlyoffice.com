# GetTitle

获取当前绘图对象的标题。

继承自 [ApiDrawing.GetTitle](../../ApiDrawing/Methods/GetTitle.md)。

## 语法

```javascript
expression.GetTitle();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取 PDF 表单中绘图对象的替代文本标题。

```javascript editor-pdf
// Read the accessibility title previously assigned to the shape.

// Create a shape, set its title, then read the title and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetTitle("My Drawing Title");
const title = shape.GetTitle();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing title: " + title);
```
