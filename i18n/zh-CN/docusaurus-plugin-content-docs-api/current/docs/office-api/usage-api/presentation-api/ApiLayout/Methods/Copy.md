# Copy

创建指定幻灯片版式对象的副本。
不复制母版幻灯片。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## 示例

在演示文稿中创建幻灯片布局的副本。

```javascript editor-pptx
// How do I duplicate a layout from a presentation master in a presentation?

// Copy a layout and apply it to another slide in a presentation.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const slide = Api.CreateSlide();
presentation.AddSlide(slide);
const copyLayout = layout.Copy();
master.AddLayout(1, copyLayout);
slide.ApplyLayout(copyLayout);
```
