# SetShadow

为当前图形对象设置阴影。

## 语法

```javascript
expression.SetShadow(shadow);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shadow | 必需 | [ApiShadow](../../ApiShadow/ApiShadow.md) \| null \| undefined |  | 要应用的阴影，或传递 null 以移除当前阴影。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上为绘图对象应用外部阴影。

```javascript editor-pdf
// Give a shape a soft offset shadow so it appears lifted off the page.

// Create a shape, build a shadow, and set it on the drawing with SetShadow.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
page.AddObject(shape);
shape.SetShadow(Api.CreateShadow({ color: Api.RGB(64, 64, 64), transparency: 0.3, offsetX: 4, offsetY: 4 }));
```
