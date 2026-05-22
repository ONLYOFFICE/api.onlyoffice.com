# GetLayout

按位置返回指定幻灯片母版的版式。

## 语法

```javascript
expression.GetLayout(nPos);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 版式位置。 |

## 返回值

[ApiLayout](../../ApiLayout/ApiLayout.md) \| null

## 示例

按索引位置从幻灯片母版检索布局。

```javascript editor-pptx
// Access the master and create a layout object to apply to a slide.

// Add the layout to the master and apply it to the current slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const layout = Api.CreateLayout();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

layout.AddObject(shape);
master.AddLayout(0, layout);
slide.ApplyLayout(master.GetLayout(0));
```
