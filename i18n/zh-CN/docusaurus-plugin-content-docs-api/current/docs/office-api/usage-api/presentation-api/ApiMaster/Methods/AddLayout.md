# AddLayout

向指定的幻灯片母版添加版式。

## 语法

```javascript
expression.AddLayout(nPos, oLayout);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 可选 | number | ApiMaster.GetLayoutsCount() | 将添加版式的位置。 |
| oLayout | 必需 | [ApiLayout](../../ApiLayout/ApiLayout.md) |  | 要添加的版式。 |

## 返回值

boolean

## 示例

此示例向指定的幻灯片母版添加版式。

```javascript editor-pptx
// Create a layout and add it to the slide master.

// Add layout to the slide master.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
const layout = Api.CreateLayout();
master.AddLayout(0, layout);
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts before adding new layout: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of layouts after adding new layout: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
