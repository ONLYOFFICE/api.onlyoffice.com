# GetLockAspect

返回绘图对象的纵横比是否已锁定。

## 语法

```javascript
expression.GetLockAspect();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

读取 PDF 表单页面上形状的纵横比是否已锁定。

```javascript editor-pdf
// Query the aspect-ratio lock before resizing the shape.

// Create a shape, lock its aspect ratio, then read and display that lock state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockAspect(true);
const locked = shape.GetLockAspect();
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Aspect ratio locked: " + locked);
```
