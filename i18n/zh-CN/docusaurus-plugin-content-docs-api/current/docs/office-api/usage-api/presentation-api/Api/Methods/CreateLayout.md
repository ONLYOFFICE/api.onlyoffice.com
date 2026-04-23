# CreateLayout

创建新的幻灯片版式，如果指定了幻灯片母版则将其添加到幻灯片母版。

## 语法

```javascript
expression.CreateLayout(oMaster);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oMaster | 可选 | [ApiMaster](../../ApiMaster/ApiMaster.md) |  | 父幻灯片母版。 |

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md)

## 示例

此示例演示如何创建版式。

```javascript editor-pptx
// How to create and apply a layout for a slide.

// Change a slide layout.

const presentation = Api.GetPresentation();
const slide1 = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = Api.CreateLayout(master);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const placeholder = Api.CreatePlaceholder("picture");
shape.SetPlaceholder(placeholder);

layout.AddObject(shape);
slide1.ApplyLayout(layout);

const slide2 = Api.CreateSlide();
presentation.AddSlide(slide2);
slide2.ApplyLayout(layout);

```
