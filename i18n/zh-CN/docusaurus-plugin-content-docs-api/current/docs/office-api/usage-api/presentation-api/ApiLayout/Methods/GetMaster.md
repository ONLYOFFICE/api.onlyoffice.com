# GetMaster

返回当前版式的父幻灯片母版。

## 语法

```javascript
expression.GetMaster();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiMaster](../../ApiMaster/ApiMaster.md)

## 示例

此示例演示如何获取当前版式的父幻灯片母版。

```javascript editor-pptx
// How to get a master of a layout.

// Get layout slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const master = layout.GetMaster();
const classType = master.GetClassType();

slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);

```
