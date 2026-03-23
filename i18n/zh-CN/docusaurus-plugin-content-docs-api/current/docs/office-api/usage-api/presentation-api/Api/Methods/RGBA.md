# RGBA

从红、绿、蓝和透明度分量创建 RGBA 颜色。

## 语法

```javascript
expression.RGBA(r, g, b, a);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | 必需 | [byte](../../Enumeration/byte.md) |  | 红色分量 (0-255)。 |
| g | 必需 | [byte](../../Enumeration/byte.md) |  | 绿色分量 (0-255)。 |
| b | 必需 | [byte](../../Enumeration/byte.md) |  | 蓝色分量 (0-255)。 |
| a | 必需 | [byte](../../Enumeration/byte.md) |  | 透明度分量 (0-255)。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例展示如何创建 RGBA 颜色并将其用作形状填充。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const color = Api.RGBA(110, 160, 180, 127);
const fill = Api.CreateSolidFill(color);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
slide.AddObject(shape);

```
