# CreatePresetColor

从可用的颜色预设中选择创建颜色。

## 语法

```javascript
expression.CreatePresetColor(presetColor);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| presetColor | 必需 | [PresetColor](../../Enumeration/PresetColor.md) |  | 从可用颜色预设名称列表中选择的预设。 |

## 返回值

[ApiPresetColor](../../ApiPresetColor/ApiPresetColor.md)

## 示例

在演示文稿中使用命名颜色作为渐变颜色光圈。

```javascript editor-pptx
// How do I apply a preset color in a presentation?

// Create a gradient with a predefined color stop in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
