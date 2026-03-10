# RemoveLayout

从当前幻灯片母版中删除版式。

## 语法

```javascript
expression.RemoveLayout(nPos, nCount);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将删除版式的位置。 |
| nCount | 可选 | number | 1 | 要删除的版式数量。 |

## 返回值

boolean

## 示例

此示例从当前幻灯片母版中删除版式。

```javascript editor-pptx
// How to delete layout from a master.

// Delete a slide master layout.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = master.GetLayoutsCount();
master.RemoveLayout(0, 2);
const countAfter = master.GetLayoutsCount();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of layouts before deletion: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of layouts after deletion: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
