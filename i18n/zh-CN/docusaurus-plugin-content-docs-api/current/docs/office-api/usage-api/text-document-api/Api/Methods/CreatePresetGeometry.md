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

此示例演示如何创建预设几何图形。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create preset geometry
let presetGeometry = Api.CreatePresetGeometry("star5");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 100));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 100, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);

paragraph.AddText("Preset geometry: " + presetGeometry.GetPreset());
paragraph.AddLineBreak();
paragraph.AddText("Is custom: " + presetGeometry.IsCustom());
paragraph.AddLineBreak();
paragraph.AddDrawing(shape);
paragraph.AddLineBreak();

```
