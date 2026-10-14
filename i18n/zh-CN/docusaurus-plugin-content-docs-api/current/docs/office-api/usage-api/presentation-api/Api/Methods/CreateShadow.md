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

在演示文稿中创建阴影并将其应用于形状。

```javascript editor-pptx
// Build an outer shadow with a color, transparency and offset, then attach it to a drawing.

// Create a shape, create the shadow via Api.CreateShadow, and apply it with SetShadow.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 213, 191));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(40 * 36000, 40 * 36000);
slide.AddObject(shape);
const shadow = Api.CreateShadow({ color: Api.RGB(0, 0, 0), transparency: 0.4, offsetX: 3, offsetY: 3 });
shape.SetShadow(shadow);
```
