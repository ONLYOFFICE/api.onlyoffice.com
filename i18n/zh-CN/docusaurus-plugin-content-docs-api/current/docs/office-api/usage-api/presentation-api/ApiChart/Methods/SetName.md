# SetName

设置当前绘图对象的名称。

如果已存在同名的其他绘图对象，该绘图对象的名称将被重置为自动生成的默认名称。OLE 对象不支持自定义名称，因此对于 OLE 对象，此方法始终返回 false。

继承自 [ApiDrawing.SetName](../../ApiDrawing/Methods/SetName.md)。

## 语法

```javascript
expression.SetName(name);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 将设置到当前绘图的名称。 |

## 返回值

boolean

## 示例

为演示文稿中幻灯片上的形状分配名称。

```javascript editor-pptx
// How do I give a shape a custom name in a presentation?

// Create a shape, assign it a name, and verify the name was applied in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(200, 220, 240));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(300), Api.MillimetersToEmus(130), fill, stroke);
shape.SetPosition(Api.MillimetersToEmus(20), Api.MillimetersToEmus(35));
shape.SetName('CustomShapeName');
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Shape name was set to: ' + shape.GetName());
slide.AddObject(shape);
```
