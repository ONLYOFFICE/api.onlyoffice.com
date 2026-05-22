# RemoveObject

从当前幻灯片版式中删除对象（图像、形状或图表）。

## 语法

```javascript
expression.RemoveObject(nPos, nCount);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将删除对象的位置。 |
| nCount | 可选 | number | 1 | 要删除的元素数量。 |

## 返回值

boolean

## 示例

从演示文稿中的布局删除形状或对象。

```javascript editor-pptx
// How do I remove an element from a layout by its position in a presentation?

// Remove a specific shape using its index on a layout in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(160 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

layout.AddObject(drawing);
layout.AddObject(copyDrawing);
layout.RemoveObject(1, 1);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The second cube was removed from this layout.");
```
