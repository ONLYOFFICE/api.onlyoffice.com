# GetShadow

返回当前图形对象的阴影。

继承自 [ApiDrawing.GetShadow](../../ApiDrawing/Methods/GetShadow.md)。

## 语法

```javascript
expression.GetShadow();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiShadow](../../ApiShadow/ApiShadow.md) \| null

## 示例

在 PDF 表单的页面上读取绘图对象的阴影并重复使用。

```javascript editor-pdf
// Retrieve the shadow applied to one shape and apply the same shadow to another.

// Set a shadow on the first shape, read it with GetShadow, and apply it to a second shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 50 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
page.AddObject(shape);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 }));
const shadow = shape.GetShadow();
const shape2 = Api.CreateShape("ellipse", 50 * 36000, 50 * 36000, fill, stroke);
shape2.SetPosition(30 * 36000, 90 * 36000);
page.AddObject(shape2);
shape2.SetShadow(shadow);
```
