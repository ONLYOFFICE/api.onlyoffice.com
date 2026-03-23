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

此示例演示如何在演示文稿中创建预设几何图形。

```javascript editor-pptx
let presentation = Api.GetPresentation();
let slide = presentation.GetSlideByIndex(0);

// Create preset geometry shape
let presetGeometry = Api.CreatePresetGeometry("star8");
let fill = Api.CreateSolidFill(Api.RGB(255, 200, 0));
let stroke = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(200, 150, 0)));
let shape = Api.CreateShape("rect", 80 * 36000, 80 * 36000, fill, stroke);
shape.SetGeometry(presetGeometry);
shape.SetPosition(1000000, 1000000);
let docContent = shape.GetDocContent();
if (docContent)
{
    let paragraph = docContent.GetElement(0);
    paragraph.AddText("Preset: " + presetGeometry.GetPreset() + " (Custom: " + presetGeometry.IsCustom() + ")");
}
slide.AddObject(shape);
```
