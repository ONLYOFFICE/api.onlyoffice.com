# SetPosY

设置绘图在幻灯片上的 y 位置。

## 语法

```javascript
expression.SetPosY(posY);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| posY | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的从幻灯片顶部到绘图上侧的距离。 |

## 返回值

boolean

## 示例

此示例设置绘图在幻灯片上的 Y 坐标位置。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(176, 196, 222));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('roundRect', Api.MillimetersToEmus(200), Api.MillimetersToEmus(100), fill, stroke);
shape.SetPosition(0, 0);
slide.AddObject(shape);

shape.SetPosY(Api.MillimetersToEmus(60));

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('Y position was changed to 60 mm.');

```
