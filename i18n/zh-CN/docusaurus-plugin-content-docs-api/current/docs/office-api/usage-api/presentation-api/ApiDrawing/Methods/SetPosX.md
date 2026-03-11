# SetPosX

设置绘图在幻灯片上的 x 位置。

## 语法

```javascript
expression.SetPosX(posX);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posX | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的从幻灯片左侧到绘图左侧的距离。 |

## 返回值

boolean

## 示例

此示例设置绘图在幻灯片上的 X 坐标位置。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#F0D9B5'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosX(Api.MillimetersToEmus(50));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('X position was changed to 50 mm.');

```
