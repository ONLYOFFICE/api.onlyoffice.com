# CreateColorByName

从可用的颜色预设中选择创建颜色。

## 语法

```javascript
expression.CreateColorByName(sPresetColor);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPresetColor | 必需 | [PresetColor](../../Enumeration/PresetColor.md) |  | 从可用颜色预设名称列表中选择的预设。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例从可用颜色预设中选择一个来创建颜色。

```javascript editor-xlsx
// How to use a color from the preset.

// Find a color by name and use it to change font color

let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorByName("peachPuff");
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
```
