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

此示例创建用于创建渐变停止点的颜色选择。

```javascript editor-pdf
// How to create a preset color.

// Add a preset color as a gradient stop.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
