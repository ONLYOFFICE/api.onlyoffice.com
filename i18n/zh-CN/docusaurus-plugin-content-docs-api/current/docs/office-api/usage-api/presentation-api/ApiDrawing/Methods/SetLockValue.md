# SetLockValue

设置当前绘图的指定锁定类型的锁定值。

## 语法

```javascript
expression.SetLockValue(sType, bValue);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | 字符串格式的锁定类型。 |
| bValue | 必需 | boolean |  | 指定是否将指定的锁定应用于当前绘图。 |

## 返回值

boolean

## 示例

此示例将锁定值设置为形状的指定锁定类型。

```javascript editor-pptx
// How to set a lock value to a shape which means that the shape cannot be selected.

// Select a shape object from a slide and set its lock value.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetLockValue("noSelect", true);

const docContent = shape.GetContent();
const lockValue = shape.GetLockValue("noSelect");
const paragraph = docContent.GetElement(0);
paragraph.AddText("This drawing cannot be selected: " + lockValue);
docContent.AddElement(0, paragraph);
slide.AddObject(shape);

```
