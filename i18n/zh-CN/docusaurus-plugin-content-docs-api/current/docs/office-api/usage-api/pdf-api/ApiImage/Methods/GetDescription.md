# GetDescription

获取当前绘图对象的描述。

继承自 [ApiDrawing.GetDescription](../../ApiDrawing/Methods/GetDescription.md)。

## 语法

```javascript
expression.GetDescription();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

获取 PDF 表单中绘图对象的替代文本描述。

```javascript editor-pdf
// Read the accessibility description previously assigned to the shape.

// Create a shape, set its description, then read it and display it.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetDescription("My Drawing Description");
const description = shape.GetDescription();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing description: " + description);
```
