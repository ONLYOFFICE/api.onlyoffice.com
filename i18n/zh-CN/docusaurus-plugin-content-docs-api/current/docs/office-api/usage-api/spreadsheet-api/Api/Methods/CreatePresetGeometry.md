# CreatePresetGeometry

使用可用的预设形状之一创建几何图形。

## 语法

```javascript
expression.CreatePresetGeometry(sPreset);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sPreset | 必需 | [ShapeType](../../Enumeration/ShapeType.md) |  | 预设名称。 |

## 返回值

[ApiGeometry](../../ApiGeometry/ApiGeometry.md) \| null

## 示例

此示例演示在电子表格中创建预设几何图形。

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();

// Create shape with preset geometry
let presetGeometry = Api.CreatePresetGeometry("roundRect");

let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = worksheet.AddShape("rect", 60 * 36000, 40 * 36000, fill, stroke, 2, 0, 2, 2);
shape.SetGeometry(presetGeometry);

worksheet.GetRange("A1").SetValue("Preset Shape Info:");
worksheet.GetRange("A2").SetValue("Type: " + presetGeometry.GetPreset());
worksheet.GetRange("A3").SetValue("Is custom: " + presetGeometry.IsCustom());
```
