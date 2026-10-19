# GetClassType

返回 ApiShadow 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiShadow](../ApiShadow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"shadow"

## 示例

获取 PDF 表单页面上阴影对象的类类型。

```javascript editor-pdf
// Confirm that an object created by Api.CreateShadow reports itself as a shadow.

// Create a shadow, apply it to a shape, and print the shadow class type inside the shape.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
page.AddObject(shape);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
const classType = shadow.GetClassType();
shape.GetContent().GetElement(0).AddText("Shadow class type: " + classType);
```
