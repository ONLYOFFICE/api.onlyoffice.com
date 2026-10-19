# CreateShadow

创建可应用于图形对象的阴影。

## 语法

```javascript
expression.CreateShadow(settings);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| settings | 必需 | [ShadowSettings](../../Enumeration/ShadowSettings.md) |  | 阴影属性。 |

## 返回值

[ApiShadow](../../ApiShadow/ApiShadow.md)

## 示例

在 PDF 表单中创建阴影并将其应用于页面上的形状。

```javascript editor-pdf
// Build an outer shadow with a color, transparency and offset, then attach it to a drawing.

// Create a shape, create the shadow via Api.CreateShadow, and apply it with SetShadow.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(30 * 36000, 30 * 36000);
page.AddObject(shape);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
```
