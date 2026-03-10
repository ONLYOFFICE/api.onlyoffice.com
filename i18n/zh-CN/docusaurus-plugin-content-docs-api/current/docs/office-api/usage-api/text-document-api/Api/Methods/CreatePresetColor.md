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

此示例通过从可用颜色预设中选择来为渐变光圈创建颜色。

```javascript editor-docx
// Creates the ApiPresetColor object and applies it to the ApiGradientStop class.

// How to create a preset color and use it for the gradient stop.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let gs1 = Api.CreateGradientStop(Api.CreatePresetColor("peachPuff"), 0);
let gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
let fill = Api.CreateRadialGradientFill([gs1, gs2]);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
