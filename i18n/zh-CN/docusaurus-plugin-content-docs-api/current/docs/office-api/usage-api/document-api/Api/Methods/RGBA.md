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

此示例展示如何创建 RGBA 颜色并将其用作内容控件的背景颜色

```javascript editor-docx
const doc = Api.GetDocument();

const run = Api.CreateRun();
run.AddText('This is an inline text content control with a translucent blue fill.');

const inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(110, 160, 180, 127));

const fill = Api.CreateSolidFill(Api.ThemeColor('accent2'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', 3212465, 963295, fill, stroke);
drawing.SetWrappingStyle('behind');

const paragraph = doc.GetElement(0);
paragraph.AddDrawing(drawing);
paragraph.AddInlineLvlSdt(inlineLvlSdt);

```
