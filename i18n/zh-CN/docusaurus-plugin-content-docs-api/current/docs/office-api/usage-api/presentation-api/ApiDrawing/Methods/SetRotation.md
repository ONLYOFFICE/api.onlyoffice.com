# SetRotation

设置当前绘图对象的旋转角度。

## 语法

```javascript
expression.SetRotation(nRotAngle);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRotAngle | 必需 | number |  | 新的绘图旋转角度。 |

## 返回值

boolean

## 示例

此示例展示如何设置绘图的旋转角度。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 130 * 36000, 10 * 36000, fill, stroke);
shape.SetPosition(100000, 2500000);
shape.SetRotation(90);

const rotAngle = shape.GetRotation();
const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Drawing rotation angle is set to: " + rotAngle + " degrees");
slide.AddObject(shape);

```
